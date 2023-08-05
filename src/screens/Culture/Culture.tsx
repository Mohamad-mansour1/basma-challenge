import React from 'react'
import { useCulture, CultureProps } from './useCulture'

const Culture: React.FC<CultureProps> = (props: CultureProps) => {
  const {} = useCulture(props)

  return (
    <main>
      <h1 className='text-center'>Culture</h1>
    </main>
  )
}

export default Culture
