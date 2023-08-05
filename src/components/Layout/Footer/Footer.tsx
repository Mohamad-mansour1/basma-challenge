import React, { memo } from 'react'
import { useFooter, FooterProps } from './useFooter'
import styles from './Footer.module.scss'

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const {} = useFooter(props)

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-5 mb-4 mb-lg-0'>
            <h4 className='mb-4'>مواقع التواصل الإجتماعي</h4>
            <div className='d-flex gap-2'>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={`${styles.input_group} input-group`}>
                <span
                  className={`${styles.input_group_text} input-group-text p-0`}
                >
                  <button className={`${styles.btn} btn btn-primary`}>
                    Subscribe
                  </button>
                </span>
                <input
                  type='text'
                  className={`${styles.form_control} form-control`}
                />
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7'>
            <div className='row'>
              <div className='col-12 col-lg-4 mb-2 mb-lg-0'>
                <h4>روابط ذات صلة</h4>
                <ul className={styles.list}>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-12 col-lg-4 mb-2 mb-lg-0'>
                <h4>روابط ذات صلة</h4>
                <ul className={styles.list}>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-12 col-lg-4 mb-2 mb-lg-0'>
                <h4>روابط ذات صلة</h4>
                <ul className={styles.list}>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.link}>
                      لوريم ابسوم دولور
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
