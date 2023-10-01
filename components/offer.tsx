import { MuiColorInput } from "mui-color-input"
import { use, useState } from "react"

export default function Offers() {
  return (
    <div className='px-12 py-8 w-full'>
      <h2 className='text-3xl font-black'>Offers</h2>

      <form className='w-full mt-8'>
        <div className='mt-4'>
          <label
            htmlFor='offer-title'
            className='block mb-2 text-secondaryLight'
          >
            Offer Title
          </label>
          <input
            required
            placeholder='Order pizza anytime'
            id='offer-title'
            type='text'
            className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
          />
        </div>
        <div className='mt-4'>
          <label
            htmlFor='description'
            className='block mb-2 text-secondaryLight'
          >
            Offer Description
          </label>
          <input
            required
            placeholder='Get 50% off'
            id='description'
            type='text'
            className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
          />
        </div>
        <div className='mt-4'>
          <label
            htmlFor='button-title'
            className='block mb-2 text-secondaryLight'
          >
            Button Title
          </label>
          <input
            required
            placeholder='Order Now'
            id='password'
            type='password'
            className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
          />
        </div>
        <div className='mt-4'>
          <button
            type='submit'
            className='w-full mt-8 p-2 bg-gradient-to-br from-accent to-accent2 rounded text-lg font-bold text-white'
          >
            Publish Offer
          </button>
        </div>
      </form>
    </div>
  )
}
