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
    <div className={`group relative cursor-pointer h-fit px-4 text-dark hover:z-10 ${className}`}>
      <div className="relative mb-4 h-full max-h-48 py-4 text-2xl">
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
        <div className="bg-gray-100 absolute -right-1 top-4 z-20 rounded-full border border-grayLighter p-2 shadow-md duration-200 hover:bg-red/50 hover:text-white">
          <HeartIcon size={24} />
        </div>
      </div>
      <div>
        <div className="mb-2 w-3/4 truncate text-base font-medium capitalize">{DummyData.name}</div>
        <div className="flex items-center justify-between">
          <div className="text-base font-medium">${DummyData.price}</div>
          <Star rate={4.3} />
        </div>
        {DummyData.discount && (
          <div className="absolute left-0 top-6 bg-green px-2.5 py-0.5 text-xs leading-none text-white">%{DummyData.discount}</div>
        )}
      </div>
      <div className="card absolute z-10 hidden border top-0 left-0 border-grayLight bg-transparent py-4 shadow-md w-full h-[calc(100%+20px)] group-hover:block">
        <div className="w-full bg-white absolute bottom-0 h-6 flex justify-center gap-4">
          <EyeIcon className='shrink-0 w-6 h-6'/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
