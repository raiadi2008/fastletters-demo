"use client"

import Image, { StaticImageData } from "next/image"
import { useState } from "react"

import logo from "@/public/logo.png"
import dashboardSelectedIcon from "@/public/dashboard-selected.png"
import dashboardIcon from "@/public/dashboard.png"
import analyticsIcon from "@/public/analytics.png"
import analyticsSelectedIcon from "@/public/analytics-selected.png"
import blogsSelectedIcon from "@/public/blogs-selected.png"
import blogsIcon from "@/public/blogs.png"
import draftsIcon from "@/public/drafts.png"
import draftsSelectedIcon from "@/public/drafts-selected.png"
import settingsIcon from "@/public/settings.png"
import settingsSelectedIcon from "@/public/settings-selected.png"
import offersSelectedIcon from "@/public/offers-selected.png"
import offersIcon from "@/public/offers.png"
import logout from "@/public/logout.png"
import Dashboard from "@/components/dashboard"
import Analytics from "@/components/analytics"
import Published from "@/components/published"
import Drafts from "@/components/drafts"
import Settings from "@/components/settings"
import Offers from "@/components/offer"

interface DashboardType {
  name: string
  img: StaticImageData
  selected: StaticImageData
}

const dashboardItemList = [
  {
    name: "Dashboard",
    img: dashboardIcon,
    selected: dashboardSelectedIcon,
  } as DashboardType,
  {
    name: "Analytics",
    img: analyticsIcon,
    selected: analyticsSelectedIcon,
  } as DashboardType,
  { name: "Published", img: blogsIcon, selected: blogsSelectedIcon },
  { name: "Drafts", img: draftsIcon, selected: draftsSelectedIcon },
  { name: "Offers", img: offersIcon, selected: offersSelectedIcon },
  { name: "Settings", img: settingsIcon, selected: settingsSelectedIcon },
]

export default function Page() {
  const [selected, setSelected] = useState(0)
  return (
    <main className='h-screen w-screen flex'>
      <section
        className='h-full w-fit py-5 px-16 relative border-r border-r-mainDark'
        id='sidebar'
      >
        <ul className='flex items-center gap-x-4'>
          <Image width={64} height={64} src={logo} alt='' />
        </ul>
        <ul>
          {dashboardItemList.map((item, index) => {
            return (
              <li
                onClick={() => setSelected(index)}
                key={index}
                className='flex gap-x-4 my-8 items-center'
              >
                <Image
                  src={selected === index ? item.selected : item.img}
                  alt=''
                  width={24}
                  height={20}
                />
                <p
                  className={` hover:cursor-pointer font-medium ${
                    index === selected
                      ? "text-transparent bg-clip-text bg-gradient-to-br from-accent  to-accent2"
                      : "text-secondaryLight"
                  }`}
                >
                  {item.name}
                </p>
              </li>
            )
          })}
        </ul>
        <ul className='absolute bottom-12'>
          <li className='flex gap-x-4 items-center'>
            <Image src={logout} alt='' width={24} height={20} />
            <p className=' hover:cursor-pointer font-medium '>logout</p>
          </li>
        </ul>
      </section>
      <section className='flex-grow h-screen overflow-scroll'>
        {selected === 0 && <Dashboard />}
        {selected === 1 && <Analytics />}
        {selected === 2 && <Published />}
        {selected === 3 && <Drafts />}
        {selected === 4 && <Offers />}
        {selected === 5 && <Settings />}
      </section>
    </main>
  )
}
