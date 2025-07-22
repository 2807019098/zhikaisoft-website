import { NextResponse } from 'next/server';
import { interactive } from '@/mock/interactive';

export async function GET() {
    return NextResponse.json(interactive);
} 