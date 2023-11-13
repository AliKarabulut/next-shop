import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (err: any) {
    return NextResponse.json({ message: "Kategoriler getirilirken bir sorun oluştu" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
