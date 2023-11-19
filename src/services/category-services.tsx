import axios from "axios";

export const getCategories = async (): Promise<any> => {
  const response = await axios.get(`${process.env.SITE_URL}/api/product/get-category`);
  return response.data;
};

export const addCategory = async (name: string): Promise<any> => {
  const response = await axios.post(`${process.env.SITE_URL}/api/product/create-category`, { name });
  return response.data;
};

export const getVariatonOptions = async (id: string): Promise<any> => {
  const response = await axios.get(`${process.env.SITE_URL}/api/product/get-variation-options`, { params: { id } });
  return response.data;
};
