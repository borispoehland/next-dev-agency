'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import type { JSX } from 'react'

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string
  answer: JSX.Element
}

const faqList: FAQItemProps[] = [
  {
    question: 'Why should I book Next Dev Agency?',
    answer: (
      <p>
        With 5 years professional Next.js experience, we encountered and solved
        several Next.js pitfalls that make your code not only cleaner, but also
        faster and more reliable.
      </p>
    ),
  },
  {
    question: 'Can I see your past work?',
    answer: (
      <p>
        Sure! Refer to{' '}
        <Link
          className="underline"
          href="https://www.borispoehland.com/portfolio"
          target="_blank"
        >
          Boris&apos; portfolio
        </Link>{' '}
        to get a glimpse of our projects.
      </p>
    ),
  },
  {
    question: 'What is refactoring and why is it important?',
    answer: (
      <p>
        Refactoring refers to the process of restructuring your code in order to
        make it simpler and more maintainable, while preserving any existing
        functionality. Refactoring today will save you heaps of work in the
        future.
      </p>
    ),
  },
  {
    question: 'What is Next.js 13 and why should I upgrade?',
    answer: (
      <p>
        Next.js 13 introduced Server Components, a novel approach to render
        components on the server. Together with streaming, your app will be
        faster and less Javascript will be shipped to the client. Upgrading
        today will place you in a future-proof position and introduce various
        performance benefits.
      </p>
    ),
  },
  {
    question: 'Can I get a refund?',
    answer: (
      <p>
        While we don&apos;t offer refunds for work that was already done on our
        side, we give you a money-back-guarantee in case we don&apos;t live up
        to the standards and scope we outlined in our offer.
      </p>
    ),
  },
]

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? 'text-primary' : ''}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && 'rotate-180'
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && 'rotate-180 hidden'
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  )
}

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 container max-w-7xl flex flex-col md:flex-row gap-4 md:gap-8">
        <div id="faqs" className="flex flex-col space-y-1 text-left basis-1/2">
          <i className="block text-muted-foreground">
            In case things are still unclear
          </i>
          <h2 className="h2">Frequently asked questions</h2>
          <p>
            Have another question? Contact us on{' '}
            <Link
              href="https://twitter.com/nextdevagency"
              className="underline"
              target="_blank"
            >
              Twitter
            </Link>{' '}
            or by{' '}
            <Link
              href="mailto:me@boris.app"
              className="underline"
              target="_blank"
            >
              email
            </Link>
            .
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
