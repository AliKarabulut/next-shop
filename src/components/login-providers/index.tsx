import { signIn } from 'next-auth/react'

import Button from '@/components/button'
import FacebookIcon from '@/icons/facebook'
import GoogleIcon from '@/icons/google'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

type LoginProviderProps = {
  isPending: boolean
}

type ProviderType = 'google' | 'facebook'

const LoginProvider = ({ isPending }: LoginProviderProps) => {
  const handleClick = (provider: ProviderType) => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT })
  }

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <Button label="Google" disabled={isPending} className="google-provider-button" onClick={() => handleClick('google')}>
        <GoogleIcon />
      </Button>
      <Button label="Facebook" disabled={isPending} className="facebook-provider-button" onClick={() => handleClick('facebook')}>
        <FacebookIcon />
      </Button>
    </div>
  )
}

export default LoginProvider
