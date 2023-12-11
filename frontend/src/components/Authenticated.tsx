import { SignedIn } from "@clerk/clerk-react";
import { Home } from "../pages/Home";

export const Authenticated = () => {
    return (
        <SignedIn>
            <Home />
        </SignedIn>
    );
};