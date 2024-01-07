import prisma from '@/libs/prismadb'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { NextRequest, NextResponse } from 'next/server'

type RequestBodyProps = {
  id: string
}

export const GET = async (request: NextRequest) => {
  const body = (await request.json()) as RequestBodyProps
  const { id } = body

  if (!id) return NextResponse.json({ message: "Kategori id'si girilmelidir" }, { status: 400 })

  try {
    const variationOptions = await prisma.category.findUnique({
      where: { id },
      include: { Variation: true },
    })
    return NextResponse.json(variationOptions?.Variation)
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError) {
      return NextResponse.json({ message: 'Varyasyonlar getirilirken bir sorun oluştu' }, { status: 500 })
    }
    return NextResponse.json({ message: 'POST Error', err }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
