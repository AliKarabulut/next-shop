import axios from "axios";
import { ToastPromise } from "@/app/utils/toast-promise";

export const getSliders = async (): Promise<any> => {
  const response = await axios.get("/api/product/slider");
  return response.data;
};

export const addSlider = async (data: FormData): Promise<any> => {
  const response = ToastPromise({ url: "/api/product/slider", data });
  return response;
};
