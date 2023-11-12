import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const categories = await prisma.category.findMany();

    return NextResponse.json(categories);
  } catch (err: any) {
    if (err.code === "P2002") return NextResponse.json({ message: "E-mail ile kayıt olunmuş" }, { status: 200 });
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};
