import { NextResponse } from 'next/server';
import { data } from '@/mock/data';

export async function GET() {
    return NextResponse.json(data);
} 