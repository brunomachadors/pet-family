import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('Recebendo requisição POST no endpoint /api/users');

  try {
    const { firstName, lastName, email, externalId } = await request.json();

    console.log('Dados recebidos:', { firstName, lastName, email, externalId });

    if (
      typeof firstName !== 'string' ||
      typeof lastName !== 'string' ||
      typeof email !== 'string' ||
      typeof externalId !== 'string'
    ) {
      console.log(
        'Erro: Nome, sobrenome, email e externalId são obrigatórios e devem ser strings'
      );
      return NextResponse.json(
        {
          error:
            'Nome, sobrenome, email e externalId são obrigatórios e devem ser strings',
        },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO users (first_name, last_name, email, external_user_id)
      VALUES (${firstName}, ${lastName}, ${email}, ${externalId})
      ON CONFLICT (email) DO UPDATE
      SET first_name = EXCLUDED.first_name,
          last_name = EXCLUDED.last_name,
          external_user_id = EXCLUDED.external_user_id
      RETURNING *`;

    console.log('Resultado da operação SQL:', result.rows[0]);

    const newUser = result.rows[0];

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        'Erro ao inserir ou atualizar o usuário no banco de dados:',
        error.message
      );
      return NextResponse.json(
        {
          error: 'Erro ao inserir ou atualizar o usuário no banco de dados',
          details: error.message,
        },
        { status: 500 }
      );
    } else {
      console.error('Erro desconhecido:', error);
      return NextResponse.json(
        {
          error: 'Erro ao inserir ou atualizar o usuário no banco de dados',
          details: 'Erro desconhecido',
        },
        { status: 500 }
      );
    }
  }
}
