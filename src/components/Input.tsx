interface InputProps {
  value?: string,
  onChange? (value: string): void,
  placeholder?: string,
  label?: string,
}

export default function Input ({ value, onChange, placeholder, label }: InputProps) {
  return (
    <label className="block">
      <div
        className="block text-[13px]"
      >{label}</div>

      <input
        className="w-full text-[16px] border-b-[1px] border-black bg-transparent px-[10px] py-2"
        value={value}
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}
