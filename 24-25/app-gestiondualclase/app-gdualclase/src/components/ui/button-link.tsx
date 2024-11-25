import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function ButtonLink({ href, children, className, onClick }: ButtonLinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button  className={className} onClick={onClick}>
        {children}
      </Button>
    </Link>
  )
}