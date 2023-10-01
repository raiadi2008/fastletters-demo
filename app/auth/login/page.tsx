"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import logo from "@/public/logo.png"

export default function Page() {
  const router = useRouter()
  return (
    <main
      id='signup'
      className='bg-gradient-to-br from-accent to-accent2 w-screen h-screen '
    >
      <section className='p-12 max-w-website mx-auto h-full'>
        <div
          id='form-section'
          className='bg-main py-12 px-14 rounded flex flex-col items-center max-w-xl h-full mx-auto'
        >
          <Image width={72} height={72} src={logo} alt='' />
          <h1 className='text-4xl font-black tracking-wider'>Welcome Back</h1>
          <form className='w-full mt-8'>
            <div className='mt-4'>
              <label
                htmlFor='work-email'
                className='block mb-2 text-secondaryLight'
              >
                Work Email
              </label>
              <input
                required
                placeholder='jhon@company.com'
                id='work-email'
                type='email'
                className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
              />
            </div>

            <div className='mt-4'>
              <label
                htmlFor='password'
                className='block mb-2 text-secondaryLight'
              >
                Password
              </label>
              <input
                required
                placeholder='password'
                id='password'
                type='password'
                className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
              />
            </div>
            <button
              onClick={(e) => router.push("/dashboard")}
              //type='submit'
              className='w-full mt-8 p-2 bg-gradient-to-br from-accent to-accent2 rounded text-lg font-bold text-white'
            >
              Log In
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
