import axios from "axios";

export const getCategories = async (): Promise<any> => {
  try {
    const response = await axios.get("/api/get-category");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const addCategory = async (name: string): Promise<any> => {
  try {
    const response = await axios.post("/api/create-category", { name });
    return response.data;
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};

export const getVariatonOptions = async (id: string): Promise<any> => {
  try {
    const response = await axios.get("/api/get-variation-options", { params: { id } });
    return response.data;
  } catch (error) {
    console.error("Error fetching variation options:", error);
    throw error;
  }
};
