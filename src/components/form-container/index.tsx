type FormContainerProps = {
  title: string
  children: React.ReactNode
}

const FormContainer = ({ title, children }: FormContainerProps) => {
  return (
    <section>
      <div className="form-container">
        <h1 className="form-title">{title}</h1>
        <div className="form-wrapper">{children}</div>
      </div>
    </section>
  )
}

export default FormContainer
