import { ActivityIndicator, StyleSheet } from 'react-native'
import { theme } from '../styles/theme'

export function Loading() {
  return (
    <ActivityIndicator
      size={24}
      color={theme.colors.blue_dark}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray_700,
  },
})
