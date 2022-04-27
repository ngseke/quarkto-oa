import { ReactNode } from 'react'

interface UserIdTextProps {
  children: ReactNode,
}

export default function UserIdText ({ children }: UserIdTextProps) {
  return (
    <div className="text-gray">
      <span className="mr-4 font-medium">ID</span>
      {children}
    </div>
  )
}
