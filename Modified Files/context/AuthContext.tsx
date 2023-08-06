import React, { ReactNode, createContext, useState } from 'react'

interface AuthContextProps {
  isAuthenticated: boolean
  token: string
  login: (newToken: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  token: '',
  login: () => {},
  logout: () => {},
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated')
    return storedAuthStatus === 'true'
  })

  const [token, setToken] = useState<string>(() => {
    const storedToken = localStorage.getItem('token') || ''
    return storedToken
  })

  const login = (newToken: string) => {
    setIsAuthenticated(true)
    setToken(newToken)
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('token', newToken)
  }

  const logout = () => {
    setIsAuthenticated(false)
    setToken('')
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
