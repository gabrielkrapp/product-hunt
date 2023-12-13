import { SignedIn } from "@clerk/clerk-react";
import { Dashboard } from "../pages/Dashboard";

export const Authenticated = () => {
    return (
        <SignedIn>
            <Dashboard />
        </SignedIn>
    );
};