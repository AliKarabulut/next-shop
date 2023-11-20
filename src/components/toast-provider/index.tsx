import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      containerStyle={{
        top: 25,
        right: 20,
      }}
      toastOptions={{
        className: "top-10",
      }}
    />
  );
};

export default ToastProvider;
