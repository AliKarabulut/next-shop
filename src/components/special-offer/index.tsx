import Image from 'next/image'
import Link from 'next/link'

import ProgressBar from '@/components/progress-bar'
import HurryUp from '@/components/hurry-up'
import cn from '@/utils/cn'

type SpecialOfferProps = {
  date: Date
  className?: string
  production: {
    name: string
    price: string
    discount: number
    url: string
    image: {
      src: string
      name: string
    }
  }
}

const SpecialOffer = ({ className, production, date }: SpecialOfferProps) => {
  return (
    <article className={cn('special-offer', className)}>
      <div className="offer-header">
        <div className="offer-title">Special Offer</div>
        <div className="discount-badge">
          <span className="text-xs">Save</span>
          <span className="text-xl font-bold">{production.discount}%</span>
        </div>
      </div>
      <figure>
        <Image src={production.image.src} width={400} height={400} alt={production.name} className="special-offer-product-image" />
        <figcaption className="special-offer-product-details">
          <Link href={production.url} className="special-offer-product-name">
            {production.name}
          </Link>
          <div className="special-offer-product-price">
            <span className="special-offer-price-discount">${(+production.price * (100 - production.discount)) / 100}</span>
            <span className="special-offer-price-original">${production.price}</span>
          </div>
        </figcaption>
      </figure>
      <ProgressBar max={60} value={6} />
      <HurryUp date={date} />
    </article>
  )
}

export default SpecialOffer
