import { authenticateRequest } from '@/app/utils/token/authenticateRequest';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }

    const url = new URL(request.url);
    const externalId = url.pathname.split('/').pop();

    if (!externalId) {
      return NextResponse.json(
        { error: 'External ID do usuário não fornecido' },
        { status: 400 }
      );
    }

    const { rows } =
      await sql`SELECT user_id, first_name, last_name, email, external_user_id FROM users WHERE external_user_id = ${externalId}`;
    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao consultar o banco de dados' },
      { status: 500 }
    );
  }
}
