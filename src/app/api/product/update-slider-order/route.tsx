import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

type SliderOrder = {
  sliderOrder: string[];
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { sliderOrder }: SliderOrder = body;

    const transaction = sliderOrder.map((sliderId: string, index: number) => {
      return prisma.slider.update({
        where: { id: sliderId },
        data: { order: index },
      });
    });
    const newOrder = await prisma.$transaction(transaction);

    return NextResponse.json(newOrder, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: "There was a problem changing the slider order" }, { status: 500 });
  }
};
