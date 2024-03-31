import { Circle, Trash2, Check } from 'lucide-react'
import styles from './card-task.module.css'

interface CardTaskProps {
  isActive: boolean
  title: string
  isCompleted: () => void
  isTrash: () => void
}

export function CardTask({
  title,
  isActive,
  isCompleted,
  isTrash,
}: CardTaskProps) {
  return (
    <div className={styles.container}>
      <button onClick={isCompleted}>
        {isActive ? (
          <div className={styles.containerIcon}>
            <Check size={11} color="var(--gray-100)" />
          </div>
        ) : (
          <Circle size={20} color="var(--blue)" />
        )}
      </button>
      <div>
        <p className={`${isActive ? styles.active : styles.title}`}>{title}</p>
      </div>
      <button onClick={isTrash}>
        <Trash2 size={20} color="var(--gray-300)" />
      </button>
    </div>
  )
}
