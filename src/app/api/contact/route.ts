import { NextResponse } from 'next/server';
import { contact } from '@/mock/contact';

export async function GET() {
    return NextResponse.json(contact);
} 