import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { name } = body;

    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    return NextResponse.json(category);
  } catch (err: any) {
    if (err.code === "P2002") return NextResponse.json({ message: "E-mail ile kayıt olunmuş" }, { status: 200 });
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
