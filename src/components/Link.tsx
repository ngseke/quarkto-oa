type LinkType = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export default function Link (props: LinkType) {
  return (
    <a
      className="
        inline-block text-base leading-[30px] px-5 py-[10px]
        border-b-[3px] border-b-transparent
      hover:border-orange
      "
      {...props}
    />
  )
}
