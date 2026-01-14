'use client'

import { useEffect, useRef } from 'react'
import { toast } from 'sonner'
import dummyBuyers from './DummyBuyer'

// components/Header.tsx
export default function Footer() {
  const minutesOptions = [1, 2, 3, 5, 7, 8, 10, 13, 15, 20, 25, 30, 35, 40, 45, 50, 55, 58, 59]
  const lastIndex = useRef(0)
  // useEffect(() => {
  //   console.log('lastIndex', lastIndex)
  //   // Show toast immediately
  //   const interval = setInterval(() => {
  //     let index
  //     do {
  //       index = Math.floor(Math.random() * dummyBuyers.length)
  //     } while (index === lastIndex.current)

  //     lastIndex.current = index
  //     const buyer = dummyBuyers[index]

  //     const minutes = minutesOptions[Math.floor(Math.random() * minutesOptions.length)]

  //     toast(
  //       <div className="flex items-center justify-center gap-2 ">
  //         <strong className="text-red-600">
  //           {buyer.name} from {buyer.city}
  //         </strong>
  //         <span>Purchased {minutes} minutes ago</span>
  //       </div>,
  //       {
  //         style: {
  //           width: 'max-content',
  //           zIndex: '100 !important',
  //         },
  //       },
  //     )
  //   }, 6000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className=" bg-black ">
      <footer className="flex flex-col max-sm:text-center  bg-black py-20 justify-center gap-2 items-center px-6  sadow-sm  md:max-w-[82.5rem] md:mx-auto">
        <h1 className="md:text-3xl text-xl font-semibold text-white">
          Ready to Elevate Your Style?
        </h1>
        <p className=" text-white px-4 rounded-full md:text-lg  text-sm">
          © {new Date().getFullYear()} Classic Premium. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}
