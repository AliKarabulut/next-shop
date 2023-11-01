import React from "react";

type SpecialOfferProps = {
  className?: string;
};

const SpecialOffer = ({ className }: SpecialOfferProps) => {
  return <div className={`w-full border rounded-3xl  ${className}`}>SpecialOffer</div>;
};

export default SpecialOffer;
