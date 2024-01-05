import StarFilledIcon from '@/icons/e-commerce/star-filled'

type StarProps = {
  rate: number
  className?: string
}

const Star = ({ rate, className = '' }: StarProps) => {
  const fullStars = Math.floor(rate)
  const hasHalfStar = rate - fullStars

  return (
    <div className={`relative flex h-4 ${className}`}>
      <div className="flex items-center ">
        {[...Array(5)].map((_, index) => (
          <StarFilledIcon key={index} className="text-grayDark/50 shrink-0" />
        ))}
      </div>
      <div className="absolute flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <StarFilledIcon key={index} className="text-yellow shrink-0" />
        ))}

        {hasHalfStar && (
          <div className="h-4 overflow-hidden flex items-center" style={{ width: `${16 * hasHalfStar}px` }}>
            <StarFilledIcon className="text-yellow shrink-0" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Star
