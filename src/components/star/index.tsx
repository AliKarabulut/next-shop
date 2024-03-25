import StarFilledIcon from '@/icons/star-filled'
import cn from '@/utils/cn'

type StarProps = {
  rate: number
  className?: string
}

const Star = ({ rate, className = '' }: StarProps) => {
  const fullStars = Math.floor(rate)
  const hasHalfStar = rate - fullStars

  return (
    <div className={cn('star-container', className)}>
      <div className="star-wrapper">
        {Array.from({ length: 5 }, (_, index) => (
          <StarFilledIcon key={index} className="star star-gray" />
        ))}
      </div>
      <div className="star-wrapper absolute">
        {Array.from({ length: fullStars }, (_, index) => (
          <StarFilledIcon key={index} className="star star-yellow" />
        ))}

        {hasHalfStar && (
          <div className="star-wrapper half-star" style={{ width: `${16 * hasHalfStar}px` }}>
            <StarFilledIcon className="star star-yellow" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Star
