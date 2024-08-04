import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export type FeatureType = {
  id: number;
  name: string;
};

export async function GET() {
  try {
    const { rows } = await sql<FeatureType[]>`SELECT * FROM features`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao consultar o banco de dados' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();

    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'O nome é obrigatório e deve ser uma string' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO features (name) VALUES (${name}) RETURNING *`;

    const newFeature = result.rows[0];

    return NextResponse.json(newFeature, { status: 201 });
  } catch (error) {
    console.error('Erro ao inserir o recurso no banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao inserir o recurso no banco de dados' },
      { status: 500 }
    );
  }
}
