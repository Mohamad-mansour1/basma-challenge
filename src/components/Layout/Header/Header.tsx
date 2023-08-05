import React, { memo } from 'react'
import { useHeader, HeaderProps } from './useHeader'
import { NavLink } from 'react-router-dom'
import logo from 'img/babel.png'
import styles from './Header.module.scss'

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { isLoading, isAuthenticated, hanldeNavLinkClick, handleLogout } =
    useHeader(props)

  return (
    <header className={styles.header}>
      <div className={styles.top_header}>
        <img src={logo} width={80} height={80} alt='logo' />
        <div className={styles.login}>
          {!isAuthenticated ? (
            <NavLink
              className='nav-link fs-4'
              aria-current='page'
              to='/Login'
              end
            >
              تسجيل الدخول
            </NavLink>
          ) : (
            <button
              type='button'
              className='btn btn-danger'
              onClick={handleLogout}
              disabled={isLoading}
            >
              {isLoading ? `يرجى الإنتظار...` : `تسجيل خروج`}
            </button>
          )}
        </div>
      </div>
      <div className={styles.bottom_header}>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <NavLink className='nav-link' aria-current='page' to='./' end>
                    الرئيسية
                  </NavLink>
                </li>
                {isAuthenticated && (
                  <li className='nav-item'>
                    <NavLink className='nav-link d-lg-none' to='Login' end>
                      تسجيل الدخول
                    </NavLink>
                  </li>
                )}
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to='News'
                    onClick={() => hanldeNavLinkClick('أخبار')}
                    end
                  >
                    أخبار
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to='Economics'
                    onClick={() => hanldeNavLinkClick('اقتصاد')}
                    end
                  >
                    اقتصاد
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to='Sport'
                    onClick={() => hanldeNavLinkClick('رياضة')}
                    end
                  >
                    رياضة
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    onClick={() => hanldeNavLinkClick('ثقافة')}
                    to='Culture'
                    end
                  >
                    ثقافة
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    onClick={() => hanldeNavLinkClick('فيديو وصور')}
                    to='Media'
                    end
                  >
                    فيديو وصور
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    onClick={() => hanldeNavLinkClick('آراء')}
                    to='Feedback'
                    end
                  >
                    آراء
                  </NavLink>
                </li>
                {isAuthenticated && (
                  <button
                    type='button'
                    className='btn btn-danger d-lg-none'
                    onClick={handleLogout}
                    disabled={isLoading}
                  >
                    {isLoading ? `يرجى الإنتظار...` : `تسجيل خروج`}
                  </button>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default memo(Header)
