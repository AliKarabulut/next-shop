type HurryUpBoxProps = {
  number: number
  name: string
  last?: boolean
}

const HurryUpBox = ({ number, name, last }: HurryUpBoxProps) => {
  return (
    <>
      <div className="w-fit">
        <div className="flex h-12 w-16 items-center justify-center rounded bg-grayLight p-1 text-center text-3xl">{number}</div>
        <div className="mt-1 text-center text-xs font-light uppercase">{name}</div>
      </div>
      {!last && <span className="mt-0.5 text-3xl font-medium">:</span>}
    </>
  )
}

export default HurryUpBox
