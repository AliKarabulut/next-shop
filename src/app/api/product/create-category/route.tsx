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

    return NextResponse.json(category, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: "Kategori eklenirken bir sorun oluştu" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
