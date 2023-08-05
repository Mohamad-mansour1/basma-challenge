import React from 'react'
import { useMedia, MediaProps } from './useMedia'

const Media: React.FC<MediaProps> = (props: MediaProps) => {
  const {} = useMedia(props)

  return (
    <main>
      <h1 className='text-center'>Media</h1>
    </main>
  )
}

export default Media
