import React from 'react'
import { useEconomics, EconomicsProps } from './useEconomics'

const Economics: React.FC<EconomicsProps> = (props: EconomicsProps) => {
  const {} = useEconomics(props)

  return (
    <main>
      <h1 className='text-center'>Economics</h1>
    </main>
  )
}

export default Economics
