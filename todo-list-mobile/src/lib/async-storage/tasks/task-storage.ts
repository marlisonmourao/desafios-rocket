import { TasksProps } from '@/screens/home'
import AsyncStorage from '@react-native-async-storage/async-storage'

const TASK_STORAGE_CONFIG = '@todo-list:tasks'

export async function saveTaskStorage(tasks: TasksProps[]) {
  try {
    await AsyncStorage.setItem(TASK_STORAGE_CONFIG, JSON.stringify(tasks))
  } catch (error) {
    console.log(error)
  }
}

export async function getTaskStorage() {
  const storage = await AsyncStorage.getItem(TASK_STORAGE_CONFIG)

  const task = storage ? JSON.parse(storage) : []

  return task
}
