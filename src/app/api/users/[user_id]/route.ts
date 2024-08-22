import { verifyToken } from '@/app/utils/verifyToken';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Token de autenticação não fornecido' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];

    try {
      verifyToken(token);
    } catch {
      return NextResponse.json(
        { error: 'Token de autenticação inválido' },
        { status: 401 }
      );
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
      await sql`SELECT user_id, first_name, last_name, email FROM users WHERE external_user_id = ${externalId}`;
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
