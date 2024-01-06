type HurryUpBoxProps = {
  number: number;
  name: string;
  last?: boolean;
};

const HurryUpBox = ({ number, name, last }: HurryUpBoxProps) => {
  return (
    <>
      <div className="w-fit">
        <div className="w-16 h-12 text-3xl text-center p-1 bg-grayLight rounded flex items-center justify-center">{number}</div>
        <div className="uppercase text-xs font-light mt-1 text-center">{name}</div>
      </div>
      {!last && <span className="text-3xl font-medium mt-0.5">:</span>}
    </>
  );
};

export default HurryUpBox;
