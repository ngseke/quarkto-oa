import clsx from 'clsx'

type ButtonType =
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  & {
    secondary?: boolean,
    block?: boolean,
  }

export default function Button ({ secondary, block, ...restProps }: ButtonType) {
  return (
    <button
      className={clsx(
        'h-[48px] px-[30px] rounded-full border-[1px]',
        secondary ? 'border-black hover:bg-white' : 'bg-black text-white border-transparent',
        block ? 'block w-full' : 'inline-block'
      )}
      {...restProps}
    />
  )
}
