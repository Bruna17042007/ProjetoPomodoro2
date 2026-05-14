import { useState, type ReactNode } from 'react'
import { AuthContext } from '.'

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function login(_username: string, _password: string): boolean {
    setIsAuthenticated(true)
    return true
  }

  function logout() {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}