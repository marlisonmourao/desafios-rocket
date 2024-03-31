import styles from './task-info.module.css'

interface TaskInfoProps {
  createdTasks: number
  completedTasks: number
}

export function TaskInfo({ completedTasks, createdTasks }: TaskInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={`${styles.title} ${styles.blue}`}>Tarefas criadas</p>

        <span className={styles.numberTaks}>{createdTasks}</span>
      </div>

      <div className={styles.wrapper}>
        <p className={`${styles.title} ${styles.purple}`}>Concluídas</p>
        <span className={styles.numberTaks}>
          {completedTasks > 0
            ? `${completedTasks} de ${createdTasks}`
            : completedTasks}
        </span>
      </div>
    </div>
  )
}
