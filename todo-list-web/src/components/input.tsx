import { ComponentProps } from 'react'
import styles from './input.module.css'

type InputProps = ComponentProps<'input'>

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  )
}
