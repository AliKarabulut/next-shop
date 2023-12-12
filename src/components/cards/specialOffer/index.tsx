import HurryUp from "@/components/production-components/hurry-up";
import ProgressBar from "@/ui/progress-bar";
import Image from "next/image";
import Link from "next/link";

type SpecialOfferProps = {
  className?: string;
  production: {
    name: string;
    price: string;
    discount: number;
    url: string;
    image: {
      src: string;
      name: string;
    };
  };
};

const SpecialOffer = ({ className, production }: SpecialOfferProps) => {
  return (
    <div
      className={`w-full rounded-3xl p-5 border-2 border-yellow relative ${className} flex flex-col items-center justify-evenly max-w-md text-lightDark`}
    >
      <span className="text-xl absolute top-7 left-5">Special Offer</span>
      <div className="w-16 h-16 bg-yellow rounded-full flex justify-center items-center flex-col absolute top-5 right-5">
        <span className="text-xs">Save</span>
        <span className="text-xl font-bold">{production.discount}%</span>
      </div>
      <Image src={production.image.src} width={400} height={400} alt={production.name} className="object-contain max-h-96 h-full" />
      <Link href={production.url} className="text-inherit text-lightDark hover:text-yellow font-bold text-sm">
        {production.name}
      </Link>
      <div className="flex gap-4 items-center">
        <span className="text-redDark text-3xl">${production.price}</span>
        <span className="text-lg text-grayDarker line-through">${+production.price - production.discount}</span>
      </div>
      <ProgressBar max={60} value={6} />
      <HurryUp date={1702508624276} />
    </div>
  );
};

export default SpecialOffer;
