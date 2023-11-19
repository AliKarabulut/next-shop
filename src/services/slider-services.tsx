export const getSliders = async (): Promise<any> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/product/slider`);
  return response.json();
};

export const addSlider = async (data: FormData): Promise<any> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/product/slider`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return response.json();
};
