import axios from "axios";

export const getSliders = async (): Promise<any> => {
  const response = await axios.get(`${process.env.SITE_URL}/api/product/slider`);
  return response.data;
};

export const addSlider = async (data: FormData): Promise<any> => {
  const response = await axios.post(`${process.env.SITE_URL}/api/product/slider`, data);
  return response.data;
};
