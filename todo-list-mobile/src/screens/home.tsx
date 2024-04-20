import { useEffect, useState } from 'react'
import { Alert, View, StatusBar, FlatList, Image } from 'react-native'

import { Button } from '@/components/button'
import { EmptyList } from '@/components/empty-list'
import { Info } from '@/components/info'
import { Input } from '@/components/input'
import { Task } from '@/components/task'

import {
  getTaskStorage,
  saveTaskStorage,
} from '@/lib/async-storage/tasks/task-storage'
import { styles } from '@/screens/styles'

export interface TasksProps {
  title: string
  completed: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState('')

  async function handleTaskCompleted(task: string) {
    setTasks((prev) => {
      return prev.map((item) => {
        if (item.title === task) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    })

    await saveTaskStorage(tasks)
  }

  async function handleCreateNewTask() {
    if (newTask.trim().length === 0) {
      return Alert.alert('Error', 'Por favor, adicione uma tarefa!')
    }

    const updatedTasks = [...tasks, { title: newTask, completed: false }]
    setTasks(updatedTasks)

    await saveTaskStorage(updatedTasks)

    setNewTask('')
  }

  async function handleRemoveTaskConfirmed(task: string) {
    const taskFiltered = tasks.filter((item) => item.title !== task)
    setTasks(taskFiltered)

    await saveTaskStorage(taskFiltered)
  }

  async function loadTasks() {
    const tasks = await getTaskStorage()

    setTasks(tasks)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.containerLogo}>
        <Image source={require('@/assets/logo.png')} alt="Todo list" />
      </View>

      <View style={styles.containerForm}>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChangeText={setNewTask}
          value={newTask}
        />
        <Button onPress={handleCreateNewTask} />
      </View>

      <Info created={tasks.length} completed={tasks.length} />

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => `${item}_${index}`}
        renderItem={({ item }) => (
          <Task
            isActiveCompleted={item.completed}
            title={item.title}
            onPress={() => handleTaskCompleted(item.title)}
            onRemoveTask={() => handleRemoveTaskConfirmed(item.title)}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
        style={{ marginTop: 40 }}
        contentContainerStyle={{ paddingBottom: 24, gap: 12 }}
      />
    </View>
  )
}
