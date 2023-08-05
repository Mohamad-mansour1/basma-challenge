import React, { memo } from 'react'
import { useCategory, CategoryProps } from './useCategory'
import { Link } from 'react-router-dom'
import styles from './Category.module.scss'

const Category: React.FC<CategoryProps> = (props: CategoryProps) => {
  const { img, imgLayout, title, tag, url, handleClick } = useCategory(props)

  return (
    <Link
      to={url}
      onClick={() => handleClick(title)}
      className='text-decoration-none'
    >
      <div className={styles.card}>
        <div className={styles.card_body}>
          <img
            src={img}
            className={`${styles.img} ${
              imgLayout === 'Vertical' ? styles.vertical : ''
            }`}
            alt={title}
            loading='lazy'
          />
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.badge}>{tag}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default memo(Category)
