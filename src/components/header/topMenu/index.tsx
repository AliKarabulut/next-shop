import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const HeaderTopMenu = () => {
  return (
    <div className="container mx-auto h-8 flex items-center justify-between text-sm font-light text">
      <div className="flex items-center">
        <span className="flex items-center gap-1">
          <BsTelephoneFill size={14} className="text-yellow" /> (+123) 123 456 7890
        </span>
        <hr className="w-[14px] h-0.5 mx-2 rotate-90 text-yellow" />
        <span className="flex items-center gap-1">
          <HiOutlineMail size={14} className="text-yellow" /> info@example.com
        </span>
      </div>
      <div className="text-center">
        <span>Campaign text</span>
      </div>
      <div>25°C</div>
    </div>
  );
};

export default HeaderTopMenu;
