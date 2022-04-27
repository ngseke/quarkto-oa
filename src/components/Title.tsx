type TitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export default function Title (props: TitleProps) {
  return (
    <h2
      className="text-2xl font-bold mb-3"
      {...props}
    />
  )
}
