export const getCategories = async (): Promise<any> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/product/get-category`);
  return response.json();
};

export const addCategory = async (name: string): Promise<any> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/product/create-category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: name,
  });
  return response.json();
};

export const getVariatonOptions = async (id: string): Promise<any> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/product/get-variation-options`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: id,
  });
  return response.json();
};
