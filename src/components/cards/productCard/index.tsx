import Image from "next/image";
import { BsHeart, BsHandbag } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Star from "@/ui/star";

const DummyData = {
  name: "Iphone Bilmem Kaç",
  price: 550,
  image: "/products/phone1.png",
  colors: ["#ff3b30", "#fed700", "#dddddd", "#333e48"],
  discount: 20,
};

const ProductCard = () => {
  return (
    <div className="text-dark group overflow-hidden cursor-pointer relative">
      <div className="relative text-2xl mb-4 py-4">
        <Image src={DummyData.image} width={720} height={660} alt="phone" />
        <div className="absolute right-0 top-4 bg-gray-100 p-2 rounded-full">
          <BsHeart />
        </div>
        <div className="absolute text-3xl translate-x-12 group-hover:translate-x-0 duration-200 right-0 top-14 bg-gray-100 p-2 rounded-full">
          <AiOutlineEye />
        </div>
        <div className="absolute bg-yellow translate-x-12 group-hover:translate-x-0 duration-200 delay-75 right-0 -bottom-4 bg-gray-100 p-2 rounded-full">
          <BsHandbag />
        </div>
      </div>
      <div>
        <div className="capitalize font-medium text-base w-3/4 truncate mb-2">{DummyData.name}</div>
        <div className="flex items-center justify-between">
          <div className="font-medium text-base">${DummyData.price}</div>
          <Star rate={4.3} />
        </div>
        {DummyData.discount && (
          <div className="text-xs leading-none px-2.5 py-0.5 absolute text-white bg-green left-0 top-6">%{DummyData.discount}</div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
