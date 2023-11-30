import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { UploadApiResponse } from "cloudinary";
import CloudinaryImageUploader from "@/helpers/cloudinary-upload";

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.formData();
    const description = data.get("description") as string;
    const file = data.get("file") as File;

    if (!description) {
      return NextResponse.json({ message: "Description must be entered" }, { status: 400 });
    }
    const existingSlider = await prisma.slider.findUnique({
      where: { description },
    });

    if (existingSlider) {
      return NextResponse.json({ message: "A slider with this description already exists" }, { status: 400 });
    }

    const imageResponse = (await CloudinaryImageUploader(file, "slider")) as UploadApiResponse;

    if (imageResponse.status !== 200) {
      return NextResponse.json({ message: imageResponse.message }, { status: imageResponse.status });
    }

    const newImage = await prisma.image.create({
      data: {
        urls: [imageResponse.url],
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
    console.log(err);
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
