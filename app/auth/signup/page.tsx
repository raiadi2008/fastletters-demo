import Image from "next/image"
import logo from "@/public/logo.png"

export default function Page() {
  return (
    <main
      id='signup'
      className='bg-gradient-to-br from-accent to-accent2 w-screen h-screen '
    >
      <section className='p-4 max-w-website mx-auto flex gap-x-24'>
        <div
          id='form-section'
          className='bg-main py-12 px-14 rounded flex flex-col items-center max-w-xl'
        >
          <Image width={72} height={72} src={logo} alt='' />
          <h1 className='text-4xl font-black tracking-wider'>
            Create Your Account
          </h1>
          <form className='w-full mt-8'>
            <div className='flex gap-x-8 w-full'>
              <div className='w-1/2'>
                <label
                  htmlFor='first-name'
                  className='block mb-2 text-secondaryLight'
                >
                  First Name
                </label>
                <input
                  required
                  placeholder='jhon'
                  id='first-name'
                  type='text'
                  className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
                />
              </div>
              <div className='w-1/2'>
                <label
                  htmlFor='last-name'
                  className='block mb-2 text-secondaryLight'
                >
                  Last Name
                </label>
                <input
                  required
                  placeholder='doe'
                  id='last-name'
                  type='text'
                  className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
                />
              </div>
            </div>
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
                htmlFor='company-name'
                className='block mb-2 text-secondaryLight'
              >
                Company Name
              </label>
              <input
                required
                placeholder='Comapny Name'
                id='company-name'
                type='text'
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
            <div className='mt-4'>
              <label
                htmlFor='confirm-password'
                className='block mb-2 text-secondaryLight'
              >
                Confirm Password
              </label>
              <input
                required
                placeholder='confirm password'
                id='confirm-password'
                type='password'
                className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
              />
              <button
                type='submit'
                className='w-full mt-8 p-2 bg-gradient-to-br from-accent to-accent2 rounded text-lg font-bold text-white'
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div id='right-info-bar' className='max-w-lg'>
          <div className='py-28'>
            <p className='text-4xl font-black mt-8'>
              Did you know blogs can increase leads upto 67% and get you 97%
              more backlinks.
            </p>
            <p className='text-xl font-medium mt-8'>
              Start your buisness blog in 5 minutes with Fastletters. It&apos;s
              then only platform being built as{" "}
              <u className='font-black'>Buisness First</u>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
