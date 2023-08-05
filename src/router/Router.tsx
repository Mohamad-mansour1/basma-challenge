import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useRouter, RouterProps } from './useRouter'
import Layout from 'components/Layout/Layout'
import Home from 'screens/Home/Home'
import Login from 'screens/Login/Login'
import News from 'screens/News/News'
import Culture from 'screens/Culture/Culture'
import Economics from 'screens/Economics/Economics'
import Feedback from 'screens/Feedback/Feedback'
import Media from 'screens/Media/Media'
import Sport from 'screens/Sport/Sport'
import NotFound from 'screens/NotFound/NotFound'

const Router: React.FC<RouterProps> = (props: RouterProps) => {
  const {} = useRouter(props)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/News' element={<News />} />
          <Route path='/Culture' element={<Culture />} />
          <Route path='/Economics' element={<Economics />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/Media' element={<Media />} />
          <Route path='/Sport' element={<Sport />} />

          {/* Not Found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
