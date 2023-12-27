import StarFilledIcon from '@/icons/e-commerce/star-filled'

type StarProps = {
  rate: number
  className?: string
}

const Star = ({ rate,className }: StarProps) => {
  const fullStars = Math.floor(rate)
  const hasHalfStar = rate - fullStars

  return (
    <div className={`relative flex h-4 w-20 ${className}`}>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <StarFilledIcon key={index} className="text-grayDark/50" />
        ))}
      </div>
      <div className="absolute flex">
        {[...Array(fullStars)].map((_, index) => (
          <StarFilledIcon key={index} className="text-yellow" />
        ))}

        {hasHalfStar && (
          <div className="h-4 overflow-hidden" style={{ width: `${16 * hasHalfStar}px` }}>
            <StarFilledIcon className="text-yellow" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Star
