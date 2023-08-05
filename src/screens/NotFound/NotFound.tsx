import React from 'react'
import { useNotFound, NotFoundProps } from './useNotFound'

const NotFound: React.FC<NotFoundProps> = (props: NotFoundProps) => {
  const {} = useNotFound(props)

  return (
    <main>
      <h1>404 Not Found</h1>
      <p>The page you are looking for could not be found.</p>
    </main>
  )
}

export default NotFound
