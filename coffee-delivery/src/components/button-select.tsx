import { type IconProps } from 'phosphor-react'

interface ButtonSelectProps {
  title: string
  icon: React.ComponentType<IconProps>
}

export function ButtonSelect({ icon: Icon, title }: ButtonSelectProps) {
  return (
    <button className="flex w-[11.18rem] items-center gap-3 rounded-md bg-base-button p-3 hover:cursor-pointer">
      <Icon size={16} className="text-purple" />

      <span className="text-xs uppercase text-base-text">{title}</span>
    </button>
  )
}
