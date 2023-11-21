import UploadIcon from "@/icons/admin/upload";

type FileInputProps = {
  name: string;
};

const FileInput = ({ name }: FileInputProps) => {
  return (
    <div className="bg-white max-w-lg w-full shadow-lg px-6 py-4 rounded-2xl ">
      <div className="w-full relative flex items-center justify-center flex-col text-center mt-2.5 mb-4 px-2 py-8 rounded-[40px] border-2 border-dashed border-admin-secondary-main">
        <UploadIcon className="w-9 h-9 flex-shrink-0" />
        <h3 className="text-2xl my-4"> Drag &amp; drop any file here </h3>
        <div className="flex gap-1 text-xl whitespace-nowrap">
          or
          <span className="text-admin-primary-dark font-medium cursor-pointer">browse file</span>
          from device
        </div>
        <input type="file" name={name} id={name} className="opacity-0 left-0 top-0 absolute w-full h-full cursor-pointer" />
      </div>
      <div className="text-white bg-admin-secondary-main transition-all duration-1000 w-[390px] relative hidden flex-row justify-between items-center cursor-pointer mt-2.5 mb-4 px-5 py-2.5 rounded-2xl">
        <div className="flex items-center text-base">
          <span className="material-icons-outlined mr-2.5">description</span> <span className="px-1 file-name"> </span> |
          <span className="px-1 file-size"></span>
        </div>
        <span className="material-icons cursor-pointer">delete</span>
        <div className="flex absolute w-0 h-1 bg-green rounded-2xl left-[4.5%] bottom-0"></div>
      </div>
    </div>
  );
};

export default FileInput;
