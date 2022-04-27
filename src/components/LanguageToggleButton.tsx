import globalIcon from '../assets/images/global.svg'

export default function LanguageToggleButton () {
  return (
    <button>
      <img
        src={globalIcon}
        alt="global icon"
        className="w-[22px] h-[22px]"
      />
    </button>
  )
}
