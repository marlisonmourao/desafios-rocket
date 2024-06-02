import type { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="h-[52px] w-full rounded-[4px] bg-base-input px-4"
      {...rest}
    />
  )
}
