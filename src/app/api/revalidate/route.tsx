import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  revalidatePath("/", "layout");
  return Response.json({ revalidated: true, now: Date.now() });
};
