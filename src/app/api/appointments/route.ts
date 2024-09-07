import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { authenticateRequest } from '@/app/utils/token/authenticateRequest';
import { PetAppointment } from '@/app/types/appointments';

export async function POST(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }

    const body = await request.json();
    const {
      pet_id,
      activity_name,
      activity_date,
      extra_info,
      frequency,
      is_completed,
      type_id,
    }: PetAppointment = body;

    const missingFields: string[] = [];

    if (!pet_id) missingFields.push('pet_id');
    if (!activity_name) missingFields.push('activity_name');
    if (!activity_date) missingFields.push('activity_date');
    if (is_completed === undefined) missingFields.push('is_completed');
    if (!type_id) missingFields.push('type_id');

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const { rowCount } = await sql`
      INSERT INTO pet_appointments (
        pet_id, 
        activity_name, 
        activity_date, 
        extra_info, 
        frequency, 
        is_completed, 
        type_id
      ) VALUES (
        ${pet_id}, 
        ${activity_name}, 
        ${activity_date}, 
        ${extra_info}, 
        ${frequency}, 
        ${is_completed}, 
        ${type_id}
      )
    `;

    if (rowCount === 1) {
      return NextResponse.json(
        { message: 'Appointment created successfully' },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to create appointment' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error creating pet appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create pet appointment' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }

    const body = await request.json();
    const {
      appointment_id,
      pet_id,
      activity_name,
      activity_date,
      extra_info,
      frequency,
      is_completed,
      type_id,
    }: Partial<PetAppointment> & { appointment_id: number } = body;

    if (!appointment_id) {
      return NextResponse.json(
        { error: 'Missing required field: appointment_id' },
        { status: 400 }
      );
    }

    const result = await sql`
      UPDATE pet_appointments
      SET 
        pet_id = COALESCE(${pet_id}, pet_id),
        activity_name = COALESCE(${activity_name}, activity_name),
        activity_date = COALESCE(${activity_date}, activity_date),
        extra_info = COALESCE(${extra_info}, extra_info),
        frequency = COALESCE(${frequency}, frequency),
        is_completed = COALESCE(${is_completed}, is_completed),
        type_id = COALESCE(${type_id}, type_id),
        updated_at = NOW()
      WHERE appointment_id = ${appointment_id}
      RETURNING *
    `;

    const updatedAppointment = result.rows[0];

    if (!updatedAppointment) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedAppointment);
  } catch (error) {
    console.error('Error updating pet appointment:', error);
    return NextResponse.json(
      { error: 'Failed to update pet appointment' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }

    const body = await request.json();
    const { appointment_id } = body;

    if (!appointment_id || isNaN(Number(appointment_id))) {
      return NextResponse.json(
        { error: 'Invalid appointment ID' },
        { status: 400 }
      );
    }

    const { rowCount } = await sql`
      DELETE FROM pet_appointments
      WHERE appointment_id = ${appointment_id}
    `;

    if (rowCount === 1) {
      return NextResponse.json(
        { message: 'Appointment deleted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to delete appointment or appointment not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error deleting pet appointment:', error);
    return NextResponse.json(
      { error: 'Failed to delete pet appointment' },
      { status: 500 }
    );
  }
}
