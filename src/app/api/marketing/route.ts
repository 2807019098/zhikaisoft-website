import { NextResponse } from 'next/server';
import { marketing } from '@/mock/marketing';

export async function GET() {
    return NextResponse.json(marketing);
} 