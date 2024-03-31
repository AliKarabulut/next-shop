type SeperatorProps = {
  text: string
}

const Seperator = ({ text }: SeperatorProps) => {
  return (
    <div className="seperator-wrapper">
      <hr className="seperator-line" aria-hidden="true" />
      {text && <span className="seperator-text">{text}</span>}
    </div>
  )
}

export default Seperator
