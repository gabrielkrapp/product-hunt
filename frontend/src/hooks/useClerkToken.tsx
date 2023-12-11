import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export const useClerkToken = () => {
    const [token, setToken] = useState<string | null>("");
    const { getToken } = useAuth();

    useEffect(() => {
        getToken({ template: 'Token' })
            .then(setToken)
            .catch((error) => {
                console.error("Erro to get token", error);
                setToken(null);
            });
    }, [getToken]);

    return token;
};