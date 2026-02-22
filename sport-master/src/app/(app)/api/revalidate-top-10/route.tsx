import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  revalidateTag('top-10', 'max');
  return NextResponse.json({ text: 'success' });
}
