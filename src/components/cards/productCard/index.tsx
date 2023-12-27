'use client'
import Image from 'next/image'
import Star from '@/ui/star'
import HeartIcon from '@/icons/e-commerce/heart'
import EyeIcon from '@/icons/e-commerce/eye'

const DummyData = {
  name: 'Iphone Bilmem Kaç',
  price: 550,
  image: '/products/phone1.png',
  image2: '/products/phone3.png',
  colors: ['#ff3b30', '#fed700', '#dddddd', '#333e48'],
  discount: 20,
}

const ProductCard = ({ className }: { className: string }) => {
  return (
    <div className={`group relative h-fit cursor-pointer px-4 text-dark hover:z-10 ${className}`}>
      <div className="relative mb-4 h-full max-h-48 py-4 text-2xl ">
        <Image
          src={DummyData.image}
          width={720}
          height={660}
          alt="phone"
          className="object-contain transition-all duration-500 group-hover:opacity-0"
        />
        <Image
          src={DummyData.image2}
          width={720}
          height={660}
          alt="phone"
          className="absolute left-0 top-4 h-full w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
        />
        <div className="bg-gray-100 invisible absolute -right-1 top-3 z-20 rounded-full border border-grayLighter p-2 opacity-0 shadow-md duration-300 hover:bg-red/50 hover:text-white group-hover:visible group-hover:opacity-100">
          <HeartIcon size={24} />
        </div>
        {/* {DummyData?.discount && (
          <div className="absolute pt-0.5 -left-1 top-4 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-yellow text-sm font-semibold ">
            {DummyData.discount}%
          </div>
        )} */}
      </div>
      <div>
        <div className="mb-2 w-3/4 truncate text-base font-medium capitalize">{DummyData.name}</div>
        <Star rate={4.3} className="ml-auto" />
        <div className="text-base font-medium">${DummyData.price}</div>
      </div>
      <div className="overflow-hidden absolute  left-0 top-0 z-10 hidden h-[calc(100%+20px)] w-full rounded-lg border border-grayLight bg-transparent py-2 shadow-md group-hover:block">
        <div className="absolute bottom-0 flex h-fit w-full justify-center pb-2 gap-4 bg-white">
          <EyeIcon className="h-6 w-6 shrink-0" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
