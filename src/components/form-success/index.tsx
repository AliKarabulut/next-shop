import Check from '@/icons/check'

type FormSuccessProps = {
  message: string
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  return (
    <div className="form-message-container form-success-message">
      <Check />
      {message}
    </div>
  )
}

export default FormSuccess
