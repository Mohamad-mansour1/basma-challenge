import React from 'react'
import { useFeedback, FeedbackProps } from './useFeedback'

const Feedback: React.FC<FeedbackProps> = (props: FeedbackProps) => {
  const {} = useFeedback(props)

  return (
    <main>
      <h1 className='text-center'>Feedback</h1>
    </main>
  )
}

export default Feedback
