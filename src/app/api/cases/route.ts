import { NextResponse } from 'next/server';
import redis from '@/lib/redis';

export async function GET() {
    const data = await redis.get('cases');
    return NextResponse.json(JSON.parse(data || '[]'));
} 