import { MuiColorInput } from "mui-color-input"
import { use, useState } from "react"

export default function Settings() {
  const [accentColor, setAccentColor] = useState("#000")
  const [secondaryColor, setSecondaryColor] = useState("#000")
  return (
    <div className='px-12 py-8 w-full'>
      <h2 className='text-3xl font-black'>Settings</h2>
      <h3 className='font-semibold mt-12 '>Website Theme</h3>
      <div className='flex mt-2 justify-between'>
        <div className='w-80'>
          <p className='mt-4'>Accent Color</p>
          <p className='text-xs text-gray-400 py-3'>
            This is the color used for buttons and active icons of your website.
            for example black button in ubers app
          </p>
          <MuiColorInput
            variant='outlined'
            format='hex'
            size='small'
            value={accentColor}
            onChange={setAccentColor}
          />
        </div>
        <div className='w-80'>
          <p className='mt-4'>Secondary Color</p>
          <p className='text-xs text-gray-400 py-3'>
            Secondary color is mostly used for text and not selected icons of
            your website. Mostly its a shade of black
          </p>
          <MuiColorInput
            variant='outlined'
            format='hex'
            size='small'
            value={secondaryColor}
            onChange={setAccentColor}
          />
        </div>
        <div className='w-80'>
          <p className='mt-4'>Main Color</p>
          <p className='text-xs text-gray-400 py-3'>
            Main color is mostly used for background. We strongly recommend you
            keep it white or some shade of white.
          </p>
          <MuiColorInput
            variant='outlined'
            format='hex'
            size='small'
            value={secondaryColor}
            onChange={setAccentColor}
          />
        </div>
      </div>
      <h3 className='font-semibold mt-20 '>Blog Domain</h3>
      <div className='mt-4'>
        <label
          htmlFor='company-name'
          className='block mb-2 text-secondaryLight'
        >
          Enter your blog domain
        </label>
        <input
          required
          placeholder='blog.company.com'
          id='company-name'
          type='text'
          className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
        />
      </div>
      <h3 className='font-semibold mt-20 '>Invite People</h3>
      <div className='mt-4'>
        <label className='block mb-2 text-secondaryLight'>
          Enter email of the person you want to invite
        </label>
        <input
          required
          placeholder='person@mail.com'
          type='text'
          className='rounded border-mainDark focus:ring-accent focus:border-accent w-full'
        />
      </div>
    </div>
  )
}
