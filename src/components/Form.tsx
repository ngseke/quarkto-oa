import UserIdText from './UserIdText'
import Title from './Title'
import Input from './Input'
import InputLayout from './InputLayout'
import Button from './Button'
import EmailModalAndButton from './EmailModalAndButton'
import { useState } from 'react'

export default function Form () {
  const [userId, setUserId] = useState('accountname')
  const [birthday, setBirthday] = useState('0000/00/00')
  const [email, setEmail] = useState('UserName@gmail.com.tw')
  const [phone, setPhone] = useState('')

  return (
    <form className="container flex justify-center">
      <div className="w-[600px]">
        <div className="mb-7">
          <Title>編輯資料</Title>
          <UserIdText>102238248455</UserIdText>
        </div>

        <div className="space-y-6 mb-11">
          <InputLayout
            input={<Input label="帳號" value={userId} onChange={setUserId} />}
          />
          <InputLayout
            input={<Input label="生日" value={birthday} onChange={setBirthday} />}
          />
          <InputLayout
            input={<Input label="信箱" value={email} onChange={setEmail} />}
            button={<EmailModalAndButton />}
          />
          <InputLayout
            input={
              <Input
                label="手機"
                placeholder="+886"
                value={phone}
                onChange={setPhone}
              />
            }
            button={<Button block>驗證手機</Button>}
          />
        </div>

        <div className="flex justify-center space-x-[10px]">
          <Button secondary>取消</Button>
          <Button>儲存</Button>
        </div>
      </div>
    </form>
  )
}
