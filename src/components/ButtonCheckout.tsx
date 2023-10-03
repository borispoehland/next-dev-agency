'use client'

import { createCheckout } from '@/lib/stripe'
import Link from 'next/link'
import { useState } from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const ButtonCheckout = ({
  priceId,
  couponCode,
}: {
  priceId: string
  couponCode: string
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      const url = await createCheckout({
        priceId,
        couponId: couponCode,
        successUrl: window.location.href,
        cancelUrl: window.location.href,
      })

      if (!url) {
        return console.error('No checkout URL')
      }

      window.location.href = url
    } catch (e) {
      console.error(e)
    }

    setIsLoading(false)
  }

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault()
        handlePayment()
      }}
      className={cn('mt-4', buttonVariants())}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        'Book now'
      )}
    </Link>
  )
}

export default ButtonCheckout
