import { useState } from 'react'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import { login } from '../../services/loginService'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

interface Props {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
}

interface LoginInputs {
  email: string
  password: string
}

export const Login = ({ setLogged }: Props) => {
  const navigate = useNavigate()

  const [loginInputs, setLoginInputs] = useState<LoginInputs>({
    email: '',
    password: ''
  })

  const [loggedResponse, setLoggedResponse] = useState({
    message: '',
    color: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const handleLogin = async () => {
    const response = await login(loginInputs)
    if (response.message === 'Login Successful') {
      setLoggedResponse({
        message: 'Login successful',
        color: 'text-green-500'
      })
      Cookies.set('authToken', response.access_token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict'
      })
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    } else {
      setLoggedResponse({
        message: 'Wrong mail or password',
        color: 'text-red-500'
      })
    }
  }

  return (
    <div className='h-5/6 shadow rounded-lg w-1/3 bg-white p-7 flex flex-col items-center justify-between'>
      <div className='flex flex-col gap-3 pt-10 w-4/6'>
        <div className='font-bold text-3xl text-center'>Login</div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>Email</label>
          <div className='flex flex-row gap-2 items-start'>
            <MdOutlineEmail className='text-gray-400 mt-1' />
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Type your email'
              className='outline-none border-b-2 border-gray-200 pb-2'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Password</label>
          <div className='flex flex-row gap-2 items-start'>
            <MdOutlineLock className='text-gray-400 mt-1' />

            <input
              id='password'
              name='password'
              type='password'
              placeholder='Type your password'
              className='outline-none border-b-2 border-gray-200 pb-2'
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className='rounded-full bg-gradient-to-r from-blue-500 to-green-500 h-10 text-white font-semibold mt-6'
          onClick={handleLogin}
        >
          Login
        </button>
        {loggedResponse.message && (
          <div
            className={`flex items-center justify-center p-2 ${loggedResponse.color}`}
          >
            {loggedResponse.message}
          </div>
        )}
      </div>
      <div className='flex flex-col'>
        <div>Want to sign up?</div>
        <button
          className='rounded-full bg-gradient-to-r from-blue-500 to-green-500 h-10 text-white font-semibold mt-6'
          onClick={() => setLogged(false)}
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
