import { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren {
  heading: string
  description: string
  benefits: string[]
  price?: number
  discountedPrice?: number
}

export default function SinglePrice({
  heading,
  description,
  benefits,
  price,
  discountedPrice,
  children,
}: IProps) {
  return (
    <article className="bg-background px-4 py-6 rounded-lg border text-start flex flex-col gap-1 shadow">
      <h3 className="h3">{heading}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex gap-2 py-4">
        {discountedPrice && (
          <div className="flex flex-col justify-end mb-[4px] text-lg ">
            <p className="relative">
              <span className="absolute bg-muted-foreground h-[1.5px] inset-x-0 top-[53%]"></span>
              <span className="text-base-content/80">${price}</span>
            </p>
          </div>
        )}
        {price ? (
          <>
            <p className="text-4xl tracking-tight font-extrabold">
              ${discountedPrice}
            </p>
            <div className="flex flex-col justify-end mb-[4px]">
              <p className="text-xs opacity-60 uppercase font-semibold">USD</p>
            </div>
          </>
        ) : (
          <p className="text-4xl tracking-tight font-extrabold">Contact us</p>
        )}
      </div>
      <ul className="space-y-2.5 leading-relaxed text-base flex-1">
        {benefits.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] opacity-80 shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {children}
    </article>
  )
}
