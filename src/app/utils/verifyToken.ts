import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export function verifyToken(token: string): JwtPayload {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    console.error('Token de autenticação inválido', error);
    throw new Error('Token de autenticação inválido');
  }
}
