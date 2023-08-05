import React from 'react'
import { useSport, SportProps } from './useSport'

const Sport: React.FC<SportProps> = (props: SportProps) => {
  const {} = useSport(props)

  return (
    <main>
      <h1 className='text-center'>Sport</h1>
    </main>
  )
}

export default Sport
