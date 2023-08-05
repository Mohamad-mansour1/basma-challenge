import React, { memo } from 'react'
import { useLayout, LayoutProps } from './useLayout'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.scss'

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = useLayout(props)

  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default memo(Layout)
