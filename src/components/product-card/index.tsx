'use client'
import Image from 'next/image'

import Star from '@/components/star'
import HeartIcon from '@/icons/heart'
import EyeIcon from '@/icons/eye'
import cn from '@/utils/cn'

const DummyData = {
  name: 'Iphone Bilmem Kaç',
  price: 550,
  image: '/products/phone1.png',
  image2: '/products/phone3.png',
  colors: ['#ff3b30', '#fed700', '#dddddd', '#333e48'],
  discount: 20,
  rate: 4.3,
}

const ProductCard = ({ className }: { className: string }) => {
  return (
    <div className={cn('product-card group', className)}>
      <div className="product-image-container">
        <Image src={DummyData.image} width={720} height={660} alt="phone" className="product-firs-image group-hover:opacity-0" />
        <Image src={DummyData.image2} width={720} height={660} alt="phone" className="product-second-image group-hover:opacity-100" />
        <div className="heart-icon-wrapper group-hover:visible group-hover:opacity-100">
          <HeartIcon size={24} />
        </div>
        {DummyData?.discount && <div className="product-discount">{DummyData.discount}%</div>}
      </div>
      <div>
        <div className="product-name">{DummyData.name}</div>
        <div className="product-rate">
          <Star rate={DummyData.rate} />
          <span className="leading-0 text-xs">{DummyData.rate}</span>
        </div>
        <div className="product-price">
          {DummyData?.discount ? (
            <>
              <div className="price-discount">${((DummyData.price * (100 - DummyData?.discount)) / 100).toFixed(2)}</div>
              <div className="price-original">${DummyData.price.toFixed(2)}</div>
            </>
          ) : (
            <div className="price-Without-discount">${DummyData.price.toFixed(2)}</div>
          )}
        </div>
      </div>
      <div className="view-button-container group-hover:block">
        <div className="view-button">
          <EyeIcon className="shrink-0 stroke-2 transition-all" />
          <p className="transition-all">View</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
