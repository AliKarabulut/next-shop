import { AiFillStar } from "react-icons/ai";

type StarProps = {
  rate: number;
};

const Star = ({ rate }: StarProps) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate - fullStars;

  return (
    <div className="flex relative h-4 w-20">
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <AiFillStar key={index} className="w-4 h-4 text-blueLight" />
        ))}
      </div>
      <div className="flex absolute">
        {[...Array(fullStars)].map((_, index) => (
          <AiFillStar key={index} className="text-yellow w-4 h-4" />
        ))}

        {hasHalfStar && (
          <div className="h-4 overflow-hidden" style={{ width: `${16 * hasHalfStar}px` }}>
            <AiFillStar className="text-yellow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Star;
