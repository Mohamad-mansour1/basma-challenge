import React from 'react'
import { useLogin, LoginProps } from './useLogin'
import { Navigate } from 'react-router-dom'
import styles from './Login.module.scss'

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const {
    isLoading,
    isAuthenticated,
    email,
    password,
    errorMessage,
    setEmail,
    setPassword,
    handleSubmit,
  } = useLogin(props)

  return !isAuthenticated ? (
    <main className={styles.main}>
      <div className='container'>
        <h1 className='text-center mb-4'>تسجيل الدخول</h1>
        <form onSubmit={handleSubmit}>
          <div className='row flex-column align-items-center'>
            <div className='col-lg-6 mb-2'>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='البريد الإلكتروني'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='col-lg-6 mb-2'>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='كلمة المرور'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='col-lg-6'>
              <button
                type='submit'
                className='btn btn-primary w-100'
                disabled={isLoading}
              >
                {isLoading ? `يرجى الإنتظار...` : `تسجيل`}
              </button>
            </div>
            {errorMessage && (
              <div className='col-lg-6 mt-2'>
                <div className='alert alert-danger'>{errorMessage}</div>
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  ) : (
    <Navigate to='/' replace />
  )
}

export default Login
