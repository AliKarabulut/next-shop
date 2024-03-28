import Exclamation from '@/icons/exclamation'
type FormErrorProps = {
  message: string
}

const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="bg-red-100 text-red-700 dark:bg-red-950 mb-1.5 inline-flex w-full items-center justify-center gap-x-1.5 rounded-md px-1.5 py-1 text-sm font-medium">
      <Exclamation />
      {message}
    </div>
  )
}

export default FormError
