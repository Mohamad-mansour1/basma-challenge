import { useState, useContext } from 'react'
import makeRequest from 'utils/makeRequest'
import { ACTIONS_ENDPOINTS, AUTH_ENDPOINTS } from 'config/apiEndpoints'
import { AuthContext } from 'context/AuthContext'

export interface HeaderProps {}

export const useHeader = (props: HeaderProps) => {
  const { isAuthenticated, token, logout } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogout = async () => {
    setIsLoading(true)

    try {
      const response = await makeRequest(
        'GET',
        AUTH_ENDPOINTS.LOGOUT,
        undefined,
        token
      )
      const { message } = response

      setIsLoading(false)

      if (message) {
        logout()
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      setIsLoading(false)
      logout()
    }
  }

  const hanldeNavLinkClick = async (type: string) => {
    if (token) {
      try {
        const args = {
          type,
        }

        await makeRequest('POST', ACTIONS_ENDPOINTS.CREATE, args, token)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
  }

  return {
    ...props,
    isLoading,
    isAuthenticated,
    handleLogout,
    hanldeNavLinkClick,
  }
}
