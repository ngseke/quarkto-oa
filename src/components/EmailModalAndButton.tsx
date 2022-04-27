import { useState } from 'react'
import Button from './Button'
import EmailModal from './EmailModal'

export default function EmailModalAndButton () {
  const [isShow, setIsShow] = useState(false)

  const open = () => setIsShow(true)
  const close = () => setIsShow(false)

  return (
    <>
      <Button block onClick={open}>驗證信箱</Button>
      {isShow && <EmailModal onClose={close} />}
    </>
  )
}
