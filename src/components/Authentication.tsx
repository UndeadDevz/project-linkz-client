import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";

export const Authentication = () => {
  return (
    <div className='h-screen bg-gradient-to-tr from-blue-500 to-green-500 flex items-center justify-center font-nunito'>
      <div className='h-5/6 shadow rounded-lg w-1/3 bg-white p-7 flex flex-col items-center justify-between'>
        <div className='flex flex-col gap-3 pt-10 w-4/6'>
          <div className='font-bold text-3xl text-center'>Login</div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <div className='flex flex-row gap-2 items-start'>
              <MdOutlineEmail className='text-gray-400 mt-1' />
              <input
                id='email'
                type='email'
                placeholder='Type your email'
                className='outline-none border-b-2 border-gray-200 pb-2'
              />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Password</label>
            <div className='flex flex-row gap-2 items-start'>
              <MdOutlineLock className='text-gray-400 mt-1' />

              <input
                id='password'
                type='password'
                placeholder='Type your password'
                className='outline-none border-b-2 border-gray-200 pb-2'
              />
            </div>
          </div>
          <button className='rounded-full bg-gradient-to-r from-blue-500 to-green-500 h-10 text-white font-semibold mt-6'>
            Login
          </button>
        </div>
        <div className='flex flex-col'>
          <div>or sign up</div>
          <button className='rounded-full bg-gradient-to-r from-blue-500 to-green-500 h-10 text-white font-semibold mt-6'>
            Sign Up
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
