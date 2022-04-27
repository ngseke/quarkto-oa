import clsx from 'clsx'

interface InputProps {
  value?: string,
  onChange? (value: string): void,
  placeholder?: string,
  label?: string,
  alignCenter?: boolean,
}

export default function Input ({ value, onChange, placeholder, alignCenter, label }: InputProps) {
  return (
    <label className="block">
      <div
        className="block text-[13px]"
      >{label}</div>

      <input
        className={clsx(
          'w-full text-[16px] border-b-[1px] border-black bg-transparent px-[10px] py-2',
          { 'text-center': alignCenter }
        )}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}
