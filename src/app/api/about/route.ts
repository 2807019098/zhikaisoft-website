import { NextResponse } from 'next/server';
import { about } from '@/mock/about';

export async function GET() {
    return NextResponse.json(about);
} 