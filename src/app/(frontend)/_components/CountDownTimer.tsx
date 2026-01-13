'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [time, setTime] = useState({
    days: 2,
    hours: 23,
    minutes: 58,
    seconds: 20,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => ({
        ...t,
        seconds: t.seconds > 0 ? t.seconds - 1 : 59,
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-3 text-xl items-center">
      {Object.entries(time).map(([k, v]) => (
        <div key={k} className="flex flex-col items-center gap-2 bg-white/20 py-4 px-5 rounded-xl">
          <div className="text-3xl font-bold">{v}</div>
          <div className="text-[10px] uppercase">{k}</div>
        </div>
      ))}
    </div>
  )
}
