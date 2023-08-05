import { useState } from 'react'

export const useAuth = () => {
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

  return {
    isAuthenticated,
    token,
    login,
    logout,
  }
}
