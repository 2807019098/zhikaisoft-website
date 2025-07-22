import { NextResponse } from 'next/server';
import { business } from '@/mock/business';

export async function GET() {
    return NextResponse.json(business);
} 