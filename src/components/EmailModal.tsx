import { useState } from 'react'
import { Portal } from 'react-portal'
import Button from './Button'
import Input from './Input'

interface EmailModalProps {
  onClose (): void,
}

export default function EmailModal ({ onClose }: EmailModalProps) {
  const [code, setCode] = useState('００００００')

  return (
    <Portal node={document?.getElementById('body')}>
      <div className="flex justify-center items-center fixed inset-0 bg-[#00000077]">
        <div className="
          w-[440px] pt-[30px] px-7 pb-5
        bg-white
          shadow-[0px_0px_10px_rgba(0,0,0,0.2)]
          rounded-[4px]
        "
        >
          <h3 className="text-2xl font-bold mb-[10px]">
            驗證信箱
          </h3>

          <p className="mb-10">
            已將包含驗證碼的信件傳送到：
            ABC0000@mail.com.tw
          </p>

          <div className="space-y-4 mb-12">
            <Input alignCenter value={code} onChange={setCode} />
            <div className="text-right">
              <a href="#" className="text-gray text-sm ali">
                重新傳送驗證信件 (59)
              </a>
            </div>
          </div>

          <div className="flex justify-end space-x-[10px]">
            <Button secondary onClick={onClose}>取消</Button>
            <Button onClick={onClose}>驗證</Button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
