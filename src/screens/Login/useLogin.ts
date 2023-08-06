import { useState, useContext } from 'react'
import makeRequest from 'utils/makeRequest'
import { AUTH_ENDPOINTS } from 'config/apiEndpoints'
import { AuthContext } from 'context/AuthContext'

export interface LoginProps {}

export const useLogin = (props: LoginProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { isAuthenticated, login } = useContext(AuthContext)

  const onSubmit = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      const loginData = { email, password }
      const response = await makeRequest(
        'POST',
        AUTH_ENDPOINTS.LOGIN,
        loginData
      )

      const { token } = response

      if (token) {
        setErrorMessage('')
        setIsLoading(false)
        login(token)
      } else {
        setErrorMessage(response.error)
        setIsLoading(false)
      }
    } catch (error) {
      setErrorMessage('بيانات التسجيل خاطئة')
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  return {
    ...props,
    isLoading,
    isAuthenticated,
    email,
    password,
    errorMessage,
    setEmail,
    setPassword,
    handleSubmit,
  }
}
