import prisma from '@/libs/prismadb'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany()
    return NextResponse.json(categories)
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError) {
      return NextResponse.json({ message: 'PrismaClientKnownRequestError', err }, { status: 500 })
    }

    return NextResponse.json({ message: 'POST Err', err }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
