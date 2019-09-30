import React, { useRef, useEffect, useState } from 'react'

export default function useClock(duration: number) {
  const [currentTime, setCurrentTime] = useState(Date.now())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now())
    })
    return () => clearInterval(intervalId)
  })

  return currentTime
}
