'use client'

import { useEffect, useRef, useState } from 'react'

const words = ['Cleaning', 'Fixing', 'Upgrading', 'Maintaining']

export default function TypedHeading() {
  const [index, setIndex] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    ref.current.classList.add('sec-text')
    let handle: NodeJS.Timeout
    function fn() {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          return 0
        }
        return prev + 1
      })
    }
    handle = setInterval(fn, 4000)

    return () => {
      clearInterval(handle)
    }
  }, [])

  return (
    <span ref={ref} className="text">
      {words[index]}
    </span>
  )
}
