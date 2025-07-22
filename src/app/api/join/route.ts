import { NextResponse } from 'next/server';
import { join } from '@/mock/join';

export async function GET() {
    return NextResponse.json(join);
} 