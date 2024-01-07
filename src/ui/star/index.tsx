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
        {Array.from({ length: 5 }, (_, index) => (
          <StarFilledIcon key={index} className="shrink-0 text-grayDark/50" />
        ))}
      </div>
      <div className="absolute flex items-center">
        {Array.from({ length: fullStars }, (_, index) => (
          <StarFilledIcon key={index} className="shrink-0 text-yellow" />
        ))}

        {hasHalfStar && (
          <div className="flex h-4 items-center overflow-hidden" style={{ width: `${16 * hasHalfStar}px` }}>
            <StarFilledIcon className="shrink-0 text-yellow" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Star
