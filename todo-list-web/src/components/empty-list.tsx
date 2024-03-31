import styles from './empty-list.module.css'
import { ClipboardList } from 'lucide-react'

export function EmptyList() {
  return (
    <div className={styles.container}>
      <ClipboardList size={48} color="#808080" />

      <p>
        Você ainda não tem tarefas cadastradas <br />
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}
