import { useContext } from 'react'
import makeRequest from 'utils/makeRequest'
import { ACTIONS_ENDPOINTS } from 'config/apiEndpoints'
import { AuthContext } from 'context/AuthContext'

export interface CategoryProps {
  img: string
  imgLayout: 'Vertical' | 'Square'
  title: string
  tag: string
  url: string
}

export const useCategory = (props: CategoryProps) => {
  const { token } = useContext(AuthContext)

  const handleClick = async (type: string) => {
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
    handleClick,
  }
}
