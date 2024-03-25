type HurryUpBoxProps = {
  number: number
  name: string
  last?: boolean
}

const HurryUpBox = ({ number, name, last }: HurryUpBoxProps) => {
  return (
    <>
      <div className="w-fit">
        <div className="hurry-up-number-box">{number}</div>
        <div className="hurry-up-box-text">{name}</div>
      </div>
      {!last && <span className="hurry-up-separator">:</span>}
    </>
  )
}

export default HurryUpBox
