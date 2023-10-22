import Image from "next/image";
import { BsHeart, BsHandbag } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const DummyData = {
  name: "Iphone Bilmem Kaç",
  price: 550,
  image: "/products/phone1.png",
  colors: ["#ff3b30", "#fed700", "#dddddd", "#333e48"],
};

const ProductCard = () => {
  return (
    <div className="relative border py-4 text-dark">
      <Image src={DummyData.image} width={720} height={660} alt="phone" />
      <div>
        <div className="capitalize font-normal text-sm">{DummyData.name}</div>
        <div className="flex items-center justify-between">
          <div className="font-medium text-base">${DummyData.price}</div>
          <div className="flex gap-2">
            {DummyData.colors.map(
              (color, index): JSX.Element => (
                <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex flex-col justify-between gap-2 h-full ">
        <div className="bg-gray-100 p-2 rounded-full">
          <BsHeart size={20} />
        </div>
        <div className="bg-gray-100 p-2 rounded-full">
          <AiOutlineEye size={20} />
        </div>
        <div className="bg-gray-100 p-2 rounded-full">
          <BsHandbag size={20} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
