import { ClerkProvider } from "@clerk/clerk-react";
import { Authenticated } from "./Authenticated";
import { Deauthenticated } from "./Deauthenticated";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export const AuthProvider = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
        <Authenticated />
        <Deauthenticated />
    </ClerkProvider>
  )
}
