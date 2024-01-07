import prisma from '@/libs/prismadb'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { NextRequest, NextResponse } from 'next/server'

type RequestBodyProps = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export const POST = async (request: NextRequest) => {
  try {
    const body = (await request.json()) as RequestBodyProps

    if (!body.email || !body.password || !body.firstName || !body.lastName) {
      return NextResponse.json({ message: 'Eksik bilgi' }, { status: 400 })
    }

    const { email, password, firstName, lastName } = body

    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    })

    return NextResponse.json(newUser)
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === 'P2002') NextResponse.json({ message: 'E-mail ile kayıt olunmuş' }, { status: 200 })
      NextResponse.json({ message: 'Prisma Error', err }, { status: 500 })
    }
    return NextResponse.json({ message: 'POST Error', err }, { status: 500 })
  }
}
