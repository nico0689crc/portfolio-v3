// Standard Library Imports
import { NextResponse } from 'next/server'; // Next.js Server Utilities

// Internal Imports
import { portfolio } from '../data'; // Portfolio Data
import type { SlugProjectParamPromiseType } from '@/types'; // Type Definitions

export async function GET(
  request: Request,
  { params }: SlugProjectParamPromiseType
) {
  try {
    const { slug } = await params;
    const project = portfolio.find((_project) => _project.slug === slug);
    
    if (!project) {
      return NextResponse.json(
        {
          message: ['Project not found'],
        },
        {
          status: 404,
          statusText: "Project Not Found",
        }
      );
    }

    return NextResponse.json(project);
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
