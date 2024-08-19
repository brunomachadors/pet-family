import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM appointment_types`;

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching appointment types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointment types' },
      { status: 500 }
    );
  }
}
