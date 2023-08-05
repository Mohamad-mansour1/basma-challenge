import React, { memo } from 'react'
import { useCollapsible, CollapsibleProps } from './useCollapsible'
import styles from './Collapsible.module.scss'

const Collapsible: React.FC<CollapsibleProps> = (props: CollapsibleProps) => {
  const { title, description, isOpen, toggle } = useCollapsible(props)

  return (
    <div className={styles.collapsible}>
      <div className={styles.header}>
        <button
          className={`${isOpen ? styles.active : ''} ${styles.btn_expand}`}
          onClick={toggle}
        >
          {isOpen ? '-' : '+'}
        </button>
        <div className={`${isOpen ? styles.active : ''} ${styles.title}`}>
          {title}
        </div>
      </div>
      <div>{isOpen && <div className={styles.content}>{description}</div>}</div>
    </div>
  )
}

export default memo(Collapsible)
