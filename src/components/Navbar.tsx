import quarktoLogo from '../assets/images/quarkto.svg'
import LanguageToggleButton from './LanguageToggleButton'
import Link from './Link'
import UserToggleButton from './UserToggleButton'

export default function Navbar () {
  return (
    <nav className="container">
      <div className="flex justify-between items-center py-8">
        <img
          src={quarktoLogo}
          className="h-[70px] w-auto"
          alt="Quarkto Logo"
        />
        <div className="space-x-5 flex items-center">
          <Link href="#">常見問題</Link>
          <UserToggleButton />
          <LanguageToggleButton />
        </div>
      </div>
    </nav>
  )
}
