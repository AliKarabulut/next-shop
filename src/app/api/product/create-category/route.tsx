import prisma from '@/libs/prismadb'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { NextRequest, NextResponse } from 'next/server'

type RequestBodyProps = {
  name: string
}

export const POST = async (request: NextRequest) => {
  try {
    const body = (await request.json()) as RequestBodyProps
    const { name } = body

    const category = await prisma.category.create({
      data: {
        name,
      },
    })

    return NextResponse.json(category, { status: 200 })
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError) {
      return NextResponse.json({ message: 'Kategori eklenirken bir sorun oluştu' }, { status: 500 })
    }
    return NextResponse.json({ message: 'POST Error', err }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
