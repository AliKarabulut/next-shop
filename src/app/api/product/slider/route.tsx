import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.formData();
    const description = data.get("description") as string;
    const file = data.get("file") as File;

    if (!file) {
      return NextResponse.json({ message: "An image must be selected" }, { status: 400 });
    }

    if (!description) {
      return NextResponse.json({ message: "Description must be entered" }, { status: 400 });
    }

    const existingSlider = await prisma.slider.findUnique({
      where: { description },
    });

    if (existingSlider) {
      return NextResponse.json({ message: "A slider with this description already exists" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ message: "The file must be an image" }, { status: 400 });
    }

    if (file.size > 1 * 1024 * 1024) {
      return NextResponse.json({ message: "The image must be smaller than 3MB " }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = file.name.replace(/ /g, "-");
    const path = `public/images/slider/${fileName}`;

    await writeFile(path, buffer);
    const newImage = await prisma.image.create({
      data: {
        urls: [path],
        main: true,
      },
    });

    const lastSlider = await prisma.slider.findFirst({
      orderBy: {
        order: "desc",
      },
    });

    const newSlider = await prisma.slider.create({
      data: {
        description,
        imageId: newImage.id,
        order: lastSlider ? lastSlider.order + 1 : 0,
      },
    });

    return NextResponse.json({ message: "Slider added successfully", newSlider }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: "There was a problem creating the slider" }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const sliders = await prisma.slider.findMany({
      include: { image: true },
    });

    return NextResponse.json(sliders);
  } catch (err: any) {
    return NextResponse.json({ message: "There was a problem fetching sliders" }, { status: 500 });
  }
};
