import { authenticateRequest } from '@/app/utils/token/authenticateRequest';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }
    const { name, dob, breed, species, sex, color, user_id } =
      await request.json();

    if (!name || !species || user_id === undefined) {
      return NextResponse.json(
        {
          error: 'Campos obrigatórios (name, species, user_id) são necessários',
        },
        { status: 400 }
      );
    }

    if (
      typeof name !== 'string' ||
      typeof species !== 'string' ||
      typeof user_id !== 'number' ||
      (dob && typeof dob !== 'string') ||
      (breed && typeof breed !== 'string') ||
      (sex && typeof sex !== 'string') ||
      (color && typeof color !== 'string')
    ) {
      return NextResponse.json(
        { error: 'Tipo de dado inválido' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO pets (name, dob, breed, species, sex, color, user_id)
      VALUES (
        ${name}, ${dob || null}, ${breed || null}, ${species}, 
        ${sex || null}, ${color || null}, ${user_id}
      )
      RETURNING *`;

    const newPet = result.rows[0];

    return NextResponse.json(newPet, { status: 201 });
  } catch (error) {
    console.error('Erro ao inserir o pet no banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao inserir o pet no banco de dados' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }

    const { pet_id, name, dob, breed, species, sex, color, user_id } =
      await request.json();

    const result = await sql`
      UPDATE pets
      SET 
        name = COALESCE(${name}, name),
        dob = COALESCE(${dob}, dob),
        breed = COALESCE(${breed}, breed),
        species = COALESCE(${species}, species),
        sex = COALESCE(${sex}, sex),
        color = COALESCE(${color}, color),
        user_id = COALESCE(${user_id}, user_id)
      WHERE pet_id = ${pet_id}
      RETURNING *`;

    const updatedPet = result.rows[0];

    if (!updatedPet) {
      return NextResponse.json(
        { error: 'Pet não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedPet);
  } catch (error) {
    console.error('Erro ao atualizar o pet no banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar o pet no banco de dados' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }

    const { pet_id } = await request.json();

    if (pet_id === undefined) {
      return NextResponse.json(
        { error: 'O campo pet_id é obrigatório' },
        { status: 400 }
      );
    }

    await sql`
      DELETE FROM weights
      WHERE pet_id = ${pet_id}
    `;

    const result = await sql`
      DELETE FROM pets
      WHERE pet_id = ${pet_id}
      RETURNING *`;

    const deletedPet = result.rows[0];

    if (!deletedPet) {
      return NextResponse.json(
        { error: 'Pet não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Pet deletado com sucesso',
      pet: deletedPet,
    });
  } catch (error) {
    console.error('Erro ao deletar o pet no banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao deletar o pet no banco de dados' },
      { status: 500 }
    );
  }
}
