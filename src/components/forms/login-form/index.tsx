'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { login } from '@/actions/login'
import Button from '@/components/button'
import Checkbox from '@/components/checkbox'
import FormContainer from '@/components/form-container'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import Input from '@/components/input'
import LoginProvider from '@/components/login-providers'
import Seperator from '@/components/seperator'
import { LoginSchema } from '@/schemas'

const LoginForm = () => {
  const params = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string>(params.get('error') ? 'User has signed in with another provider' : '')
  const [success, setSuccess] = useState<string>('')
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      code: '',
      rememberMe: false,
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      login(values).then(data => {
        if (data?.error) {
          setError(data.error)
        } else if (data?.success) {
          setSuccess(data.success)
        } else if (data?.twoFactor) {
          setShowTwoFactor(true)
        }
      })
    })
  }
  return (
    <FormContainer title="Sign In To Your Account">
      <form onSubmit={handleSubmit(onSubmit)}>
        {showTwoFactor ? (
          <Input label="Two Factor Code" type="number" {...register('code')} error={errors.code?.message} />
        ) : (
          <>
            <Input label="Email address" type="email" {...register('email')} error={errors.email?.message} />
            <Input label="Password" type="password" {...register('password')} error={errors.password?.message} />
            <div className="form-auth-actions">
              <Checkbox label="Remember me" {...register('rememberMe')} />
              <Button href="/reset-password" label="Forgot password" variant="ghost" className="w-fit p-0 font-normal" />
            </div>
          </>
        )}
        <div>
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button label={showTwoFactor ? 'Confirm' : 'Log in'} disabled={isPending} />
        </div>
      </form>
      <Seperator text="Or continue with" />
      <LoginProvider isPending={isPending} />
    </FormContainer>
  )
}

export default LoginForm
