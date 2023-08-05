import React from 'react'
import { useNews, NewsProps } from './useNews'

const News: React.FC<NewsProps> = (props: NewsProps) => {
  const {} = useNews(props)

  return (
    <main>
      <h1 className='text-center'>News</h1>
    </main>
  )
}

export default News
