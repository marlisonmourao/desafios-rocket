import styles from './header.module.css'

export function Header() {
  return (
    <div className={styles.container}>
      <img src="./logo.svg" alt="Logo da aplicação" />
    </div>
  )
}
