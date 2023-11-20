import axios from "axios";

export const getSliders = async (): Promise<any> => {
  const response = await axios.get("/api/product/slider");
  return response.data;
};

export const addSlider = async (data: FormData): Promise<any> => {
  const response = await axios.post("/api/product/slider", data);
  return response.data;
};
