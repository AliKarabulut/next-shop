import Exclamation from '@/icons/exclamation'
type FormErrorProps = {
  message: string
}

const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="form-message-container form-error-message">
      <Exclamation />
      {message}
    </div>
  )
}

export default FormError
