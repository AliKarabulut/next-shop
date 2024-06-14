'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { register as registerAction } from '@/actions/register'
import Button from '@/components/button'
import FormContainer from '@/components/form-container'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import Input from '@/components/input'
import LoginProvider from '@/components/login-providers'
import Seperator from '@/components/seperator'
import { RegisterSchema } from '@/schemas'

const RegisterForm = () => {
  const params = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string>(params.get('error') ? 'User has signed in with another provider' : '')
  const [success, setSuccess] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      registerAction(values).then(data => {
        if (data?.error) {
          setError(data.error)
        } else if (data?.success) {
          setSuccess(data.success)
        }
      })
    })
  }
  return (
    <FormContainer title="Register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Name" type="text" {...register('name')} error={errors.name?.message} />
        <Input label="Email address" type="email" {...register('email')} error={errors.email?.message} />
        <Input label="Password" type="password" {...register('password')} error={errors.password?.message} />
        <Input
          label="Repeat Password"
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
        <div className="form-auth-actions">
          <Button href="/login" label="Do you have an account? &nbsp;" variant="ghost" />
        </div>
        <div>
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button label="Register" disabled={isPending} />
        </div>
      </form>
      <Seperator text="Or continue with" />
      <LoginProvider isPending={isPending} />
    </FormContainer>
  )
}

export default RegisterForm
