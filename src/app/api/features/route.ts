import { NextResponse } from 'next/server';

export type FeatureType = {
  id: number;
  name: string;
};

let features: FeatureType[] = [
  { id: 1, name: 'Registro de histórico de vacinas e tratamentos' },
  { id: 2, name: 'Contatos de veterinários' },
  { id: 3, name: 'Informações específicas para cada tipo de animal e raça' },
  { id: 4, name: 'Dicas e informações personalizadas para o seu pet' },
  { id: 5, name: 'Localização de lugares pet-friendly' },
  { id: 6, name: 'Cupons de desconto em lojas parceiras' },
];

export async function GET() {
  return NextResponse.json(features);
}

export async function POST(request: Request) {
  try {
    const newFeature: FeatureType = await request.json();
    const newId =
      features.length > 0
        ? Math.max(...features.map((Feature) => Feature.id)) + 1
        : 1;
    const FeatureWithId = { ...newFeature, id: newId };
    features.push(FeatureWithId);
    return NextResponse.json(FeatureWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to add new Feature' },
      { status: 400 }
    );
  }
}
