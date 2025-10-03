import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs');
    
    if (!response.ok) {
      throw new Error('Failed to fetch tariffs');
    }

    const data = await response.json();

    const sortedData = sortTariffs(data);

    return NextResponse.json(sortedData);
  } catch (error) {
    console.error('Error fetching tariffs:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

function sortTariffs(tariffs) {
  return [...tariffs].sort((a, b) => b.price - a.price);
}