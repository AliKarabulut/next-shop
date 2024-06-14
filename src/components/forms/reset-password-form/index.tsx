'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { resetPassword } from '@/actions/reset-password'
import Button from '@/components/button'
import FormContainer from '@/components/form-container'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import Input from '@/components/input'
import { EmailSchema } from '@/schemas'

const ResetPasswordForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof EmailSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      resetPassword(values).then(data => {
        if (data?.error) {
          setError(data.error)
        } else if (data?.success) {
          setSuccess(data.success)
        }
      })
    })
  }

  return (
    <FormContainer title="Forgot Your Password">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email address" type="email" {...register('email')} error={errors.email?.message} />
        <div>
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button label="Send Reset Email" disabled={isPending} />
        </div>
      </form>
    </FormContainer>
  )
}

export default ResetPasswordForm
