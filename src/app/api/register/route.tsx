import prisma from "@/libs/prismadb"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request:NextRequest) => {
    try {
        const body = await request.json();
        const {email,password,firstName,lastName} = body;

        const newUser = await prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
            }
        })

        return NextResponse.json(newUser);

    } catch(err:any) {
        if (err.code === 'P2002') return NextResponse.json({ message: "E-mail ile kayıt olunmuş" }, { status: 200 });
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}