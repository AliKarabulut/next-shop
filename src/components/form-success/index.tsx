import Check from '@/icons/check'

type FormSuccessProps = {
  message: string
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  return (
    <div className="bg-green-100 text-green-700 dark:bg-green-950 mb-1.5 inline-flex w-full items-center justify-center gap-x-1.5 rounded-md px-1.5 py-1 text-sm font-medium">
      <Check />
      {message}
    </div>
  )
}

export default FormSuccess
