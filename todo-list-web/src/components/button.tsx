import { PlusCircle } from 'lucide-react'

import styles from './button.module.css'
import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export function Button({ ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      Criar
      <PlusCircle size={14} />
    </button>
  )
}
