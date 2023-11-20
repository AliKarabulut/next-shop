import axios from "axios";
import toast from "react-hot-toast";

type ToastPromiseProps = {
  url: string;
  data?: any;
};

export const ToastPromise = async ({ url, data }: ToastPromiseProps) => {
  try {
    const response = await axios.post(url, data);
    toast.success(response.data.message);
    return response.data;
  } catch (err: any) {
    toast.error(err.response.data.message);
    return err.response.data;
  }
};
