import Image from 'next/image'
import Link from 'next/link'

import ProgressBar from '@/components/progress-bar'
import HurryUp from '@/components/hurry-up'

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
    <div
      className={`relative w-full rounded-3xl border-2 border-yellow p-5 ${className} flex max-w-md flex-col items-center justify-between text-lightDark`}>
      <div className="flex w-full items-center justify-between">
        <span className="w-full text-left text-xl">Special Offer</span>
        <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-full bg-yellow">
          <span className="text-xs">Save</span>
          <span className="text-xl font-bold">{production.discount}%</span>
        </div>
      </div>
      <Image src={production.image.src} width={400} height={400} alt={production.name} className="h-fit max-h-96 object-contain" />
      <div className="flex flex-col items-center gap-3">
        <Link href={production.url} className="text-sm font-bold text-lightDark hover:text-yellow">
          {production.name}
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-3xl text-redDark">${(+production.price * (100 - production.discount)) / 100}</span>
          <span className="text-lg text-grayDarker line-through">${production.price}</span>
        </div>
      </div>
      <ProgressBar max={60} value={6} />
      <HurryUp date={date} />
    </div>
  )
}

export default SpecialOffer
