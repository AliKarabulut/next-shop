import axios from "axios";
import toast from "react-hot-toast";

type ToastPromiseProps = {
  url: string;
  data?: any;
};

export const ToastPromise = async ({ url, data }: ToastPromiseProps) => {
  return toast.promise(axios.post(url, data), {
    loading: "Uploading...",
    success: (response) => `${response.data.message}`,
    error: (err) => `${err.response.data.message}`,
  });
};
