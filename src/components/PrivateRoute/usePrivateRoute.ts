export interface PrivateRouteProps {
  isAuthenticated: boolean
  element: React.ReactNode
}

export const usePrivateRoute = (props: PrivateRouteProps) => {
  return {
    ...props,
  }
}
