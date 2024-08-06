import { NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: NextRequest) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Gerar um token JWT
    const token = jwt.sign({ userId }, secret, { expiresIn: '1h' });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to generate token' },
      { status: 500 }
    );
  }
}
