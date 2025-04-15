// Standard Library Imports
import { NextResponse } from 'next/server'; // Next.js Server Utilities
import { metadata } from './data';

export async function GET() {
  try {
    return NextResponse.json(metadata);
  } catch (_error: unknown) {
    const error = _error instanceof Error ? _error : new Error('Unknown error occurred');
    return NextResponse.json(
      {
        message: [error.message],
      },
      {
        status: 500,
        statusText: 'Internal Server Error',
      }
    );
  }
}
