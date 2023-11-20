import axios from "axios";

export const getCategories = async (): Promise<any> => {
  const response = await axios.get("/api/product/get-category");
  return response.data;
};

export const addCategory = async (name: string): Promise<any> => {
  const response = await axios.post("/api/product/create-category", { name });
  return response.data;
};

export const getVariatonOptions = async (id: string): Promise<any> => {
  const response = await axios.get("/api/product/get-variation-options", { params: { id } });
  return response.data;
};
