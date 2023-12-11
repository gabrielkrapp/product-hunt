import { RedirectToSignIn, SignedOut } from '@clerk/clerk-react'

export const Deauthenticated = () => {
  return (
    <SignedOut>
        <RedirectToSignIn />
    </SignedOut>
  )
}
