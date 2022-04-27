import { ReactNode } from 'react'

interface InputLayoutProps {
  input: ReactNode,
  button?: ReactNode,
}

export default function InputLayout ({ input, button }: InputLayoutProps) {
  return (
    <div className="flex items-end space-x-5">
      <div className="basis-3/4">
        {input}
      </div>
      <div className="grow">
        {button}
      </div>
    </div>
  )
}
