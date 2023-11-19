import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const body = await request.json();
  const { id } = body;

  if (!id) return NextResponse.json({ message: "Kategori id'si girilmelidir" }, { status: 400 });

  try {
    const variationOptions = await prisma.category.findUnique({
      where: { id },
      include: { Variation: true },
    });
    return NextResponse.json(variationOptions?.Variation);
  } catch (err: any) {
    return NextResponse.json({ message: "Varyasyonlar getirilirken bir sorun oluştu" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
