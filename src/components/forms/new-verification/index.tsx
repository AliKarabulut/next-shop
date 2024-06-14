'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

import { newVerification } from '@/actions/new-verification'
import Button from '@/components/button'
import FormContainer from '@/components/form-container'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'

const NewVerificationForm = () => {
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const router = useRouter()

  const onSubmit = useCallback(async () => {
    if (error || success) return
    if (!token) {
      setError('No token provided')
      return
    }

    const response = await newVerification(token)
    if (response.error) {
      setError(response.error)
      setSuccess('')
      return
    } else if (response.success) {
      setSuccess(response.success)
      setError('')
      router.push('/login')
      return
    }
  }, [token, error, success]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <FormContainer title="Confirming Your Verification">
      <div className="form-verification-container">
        {!error && !success && <BeatLoader />}
        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}
      </div>
      <Button label="Back to login" href="/login" className="mt-2 sm:mt-4" />
    </FormContainer>
  )
}

export default NewVerificationForm
