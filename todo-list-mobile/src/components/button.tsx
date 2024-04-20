import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '@/styles/theme'

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Feather name="plus-circle" color={theme.colors.gray_100} size={18} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    width: 52,
    borderRadius: 8,
    backgroundColor: theme.colors.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
