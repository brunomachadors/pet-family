import { NextResponse } from 'next/server';
import { verifyToken } from './verifyToken';

export function authenticateRequest(request: Request) {
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

  return null;
}
