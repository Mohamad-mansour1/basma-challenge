import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { usePrivateRoute, PrivateRouteProps } from './usePrivateRoute'

const PrivateRoute: React.FC<PrivateRouteProps> = (
  props: PrivateRouteProps
) => {
  const { isAuthenticated, element } = usePrivateRoute(props)

  return isAuthenticated ? (
    <Fragment>{element}</Fragment>
  ) : (
    <Navigate to='/Login' replace />
  )
}

export default PrivateRoute
