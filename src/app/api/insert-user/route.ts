import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Parse the request body
    const {
      name,
      age,
      country,
      phone,
      describeYourself,
      description,
      subscriptionPlan,
      gender,
      option,
    } = await request.json();

    // Insert the user data into the database
    const user = await prisma.user.create({
      data: {
        name,
        age: parseInt(age), // Convert age to a number
        country,
        phone,
        describeYourself,
        description,
        subscriptionPlan,
        gender,
        option,
      },
    });

    // Return the created user
    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to insert user' },
      { status: 500 }
    );
  }
}