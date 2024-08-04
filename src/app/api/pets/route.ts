import { NextResponse } from 'next/server';

export type PetType = {
  id: number;
  name: string;
  description: string;
};

let petTypes: PetType[] = [
  {
    id: 1,
    name: 'Cachorro',
    description: 'Amigos leais e brincalhões, ótimos para famílias.',
  },
  {
    id: 2,
    name: 'Gato',
    description: 'Independentes e afetuosos, bons para espaços menores.',
  },
  {
    id: 3,
    name: 'Pássaro',
    description: 'Coloridos e alegres, podem ser ótimos companheiros.',
  },
  {
    id: 4,
    name: 'Peixe',
    description: 'Relaxantes de observar e requerem menos interação.',
  },
];

export async function GET() {
  return NextResponse.json(petTypes);
}

export async function POST(request: Request) {
  try {
    const newPetType: PetType = await request.json();
    const newId =
      petTypes.length > 0 ? Math.max(...petTypes.map((pet) => pet.id)) + 1 : 1;
    const petWithId = { ...newPetType, id: newId };
    petTypes.push(petWithId);
    return NextResponse.json(petWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to add new pet type' },
      { status: 400 }
    );
  }
}
