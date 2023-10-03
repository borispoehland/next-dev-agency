import Balance from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn('h1 my-2', className)} {...props} />
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        'max-w-[750px] text-lg text-muted-foreground sm:text-xl',
        className
      )}
      {...props}
    />
  )
}

export { PageHeaderHeading, PageHeaderDescription }
