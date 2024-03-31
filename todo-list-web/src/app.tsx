import { Header } from './components/header'
import { Input } from './components/input'

import styles from './app.module.css'
import './global.css'
import { Button } from './components/button'
import { TaskInfo } from './components/task-info'

import { CardTask } from './components/card-task'
import { useEffect, useState } from 'react'
import { EmptyList } from './components/empty-list'

export function App() {
  const [isActive, setIsActive] = useState(false)
  const [tasks, setTasks] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [tasksCompleted, setTasksCompleted] = useState<string[]>([])

  async function handleCreateTask() {
    if (title.trim().length === 0) {
      return alert('Digite uma tarefa')
    }

    const newArray = [...tasks, title]

    setTasks(newArray)
    await localStorage.setItem('tasks', JSON.stringify(newArray))

    setTitle('')
  }

  function handleTaskCompleted(task: string) {
    setIsActive(!isActive)

    setTasksCompleted((prev) => {
      if (prev.includes(task)) {
        const filtered = prev.filter((item) => item !== task)
        localStorage.setItem('tasksCompleted', JSON.stringify(filtered))

        return filtered
      }

      localStorage.setItem('tasksCompleted', JSON.stringify([...prev, task]))

      return [...prev, task]
    })
  }

  function handleRemoveTask(task: string) {
    const removeTask = tasks.filter((t) => t !== task)
    const removeTaskCompleted = tasksCompleted.filter((t) => t !== task)

    setTasksCompleted(removeTaskCompleted)
    setTasks(removeTask)

    localStorage.setItem('tasks', JSON.stringify(removeTask))
    localStorage.setItem('tasksCompleted', JSON.stringify(removeTaskCompleted))
  }

  useEffect(() => {
    const taskStorage = localStorage.getItem('tasks')
    const taskCompletedStorage = localStorage.getItem('tasksCompleted')

    if (taskStorage) {
      setTasks(JSON.parse(taskStorage))
    }

    if (taskCompletedStorage) {
      setTasksCompleted(JSON.parse(taskCompletedStorage))
    }
  }, [])

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <div className={styles.wrapperInput}>
          <Input onChange={(e) => setTitle(e.target.value)} value={title} />

          <Button onClick={handleCreateTask} />
        </div>

        <TaskInfo
          completedTasks={tasksCompleted.length}
          createdTasks={tasks.length}
        />

        <div className={`${styles.containerTasks}`}>
          {tasks.length > 0 ? (
            tasks.map((item) => (
              <CardTask
                key={item}
                isActive={tasksCompleted.includes(item)}
                isCompleted={() => handleTaskCompleted(item)}
                isTrash={() => handleRemoveTask(item)}
                title={item}
              />
            ))
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </div>
  )
}
