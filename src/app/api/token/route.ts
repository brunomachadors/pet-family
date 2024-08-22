import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

if (!process.env.JWT_SECRET) {
  throw new Error(
    'JWT_SECRET is not defined. Please set it in your environment variables.'
  );
}

const expectedSecret = process.env.JWT_SECRET;

export async function POST(request: NextRequest) {
  try {
    const { user, secret } = await request.json();

    if (!user || !secret) {
      return NextResponse.json(
        { message: 'User and secret are required' },
        { status: 400 }
      );
    }

    if (secret !== expectedSecret) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const token = jwt.sign({ user }, expectedSecret, { expiresIn: '1h' });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to generate token' },
      { status: 500 }
    );
  }
}
