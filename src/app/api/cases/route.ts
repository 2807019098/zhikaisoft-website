import { NextResponse } from 'next/server';
import redis from '@/lib/redis';
import { cases } from '@/mock/cases';

export async function GET() {
    // const data = await redis.get('cases');
    // return NextResponse.json(JSON.parse(data || '[]'));
    return NextResponse.json(cases);
} 