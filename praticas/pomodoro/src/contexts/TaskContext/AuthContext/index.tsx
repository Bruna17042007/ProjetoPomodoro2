import { createContext, useContext } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType,
);

export function useAuthContext() {
    return useContext(AuthContext);
}

export { AuthContextProvider } from './AuthContextProvider';