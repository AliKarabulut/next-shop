'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { EmailSchema } from '@/schemas'
import Button from '@/components/button'
import Input from '@/components/input'
import { newEmail } from '@/actions/new-email'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import FormContainer from '@/components/form-container'

const NewEmailForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const { update, data } = useSession()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

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

  const onSubmit = (value: z.infer<typeof EmailSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      newEmail(value, token).then(res => {
        if (res?.error) {
          setError(res.error)
        } else if (res?.success) {
          update({ ...data?.user, email: value.email })
          setSuccess(res.success)
        }
      })
    })
  }

  return (
    <FormContainer title="New Email">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
        <div>
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button label="Change Email" disabled={isPending} />
        </div>
      </form>
    </FormContainer>
  )
}

export default NewEmailForm
