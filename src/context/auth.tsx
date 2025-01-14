"use client"
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, FC, useEffect, useState } from "react";
import { auth } from "../firebase/config";

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
}
export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: false,
})

interface AuthProviderProps{
    children: React.ReactElement
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false)
        })
    }, [])

    const value = {
        user,
        isLoading,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}