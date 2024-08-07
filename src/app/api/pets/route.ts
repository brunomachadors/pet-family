import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, dob, breed, species, sex, color, id_user } =
      await request.json();

    if (!name || !species || id_user === undefined) {
      return NextResponse.json(
        {
          error: 'Campos obrigatórios (name, species, id_user) são necessários',
        },
        { status: 400 }
      );
    }

    if (
      typeof name !== 'string' ||
      typeof species !== 'string' ||
      typeof id_user !== 'number' ||
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
      INSERT INTO pets (name, dob, breed, species, sex, color, id_user)
      VALUES (${name}, ${dob || null}, ${breed || null}, ${species}, ${
      sex || null
    }, ${color || null}, ${id_user})
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
    const { id_pet, name, dob, breed, species, sex, color, id_user } =
      await request.json();

    // Atualiza o pet na tabela
    const result = await sql`
      UPDATE pets
      SET 
        name = COALESCE(${name}, name),
        dob = COALESCE(${dob}, dob),
        breed = COALESCE(${breed}, breed),
        species = COALESCE(${species}, species),
        sex = COALESCE(${sex}, sex),
        color = COALESCE(${color}, color),
        id_user = COALESCE(${id_user}, id_user)
      WHERE id_pet = ${id_pet}
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
