import React from "react";

type ProgressBarProps = {
  max: number;
  value: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ max, value }) => {
  const width = (value / max) * 100;

  return (
    <div className="w-full text-lightDark text-sm">
      <div className="flex justify-between mb-1">
        <span>
          Already Sold: <strong>{value}</strong>
        </span>
        <span>
          Available: <strong>{max}</strong>
        </span>
      </div>
      <div className="h-4 bg-admin-grey-200 rounded-[10px]">
        <div style={{ width: `${width}%` }} className="h-full bg-yellow rounded-[10px]"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
