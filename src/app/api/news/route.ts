import { NextResponse } from 'next/server';
import { news } from '@/mock/news';

export async function GET() {
    return NextResponse.json(news);
} 