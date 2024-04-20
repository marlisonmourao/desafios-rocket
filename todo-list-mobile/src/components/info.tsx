import { theme } from '@/styles/theme'
import { StyleSheet, Text, View } from 'react-native'

interface InfoProps {
  created: number
  completed: number
}

export function Info({ completed, created }: InfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Criadas</Text>
        <Text style={styles.count}>{created}</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.label, { color: theme.colors.purple }]}>
          Concluídas
        </Text>
        <Text style={styles.count}>{completed}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  label: {
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_family.bold,
    color: theme.colors.blue,
  },
  count: {
    fontSize: theme.font_size.xs,
    color: theme.colors.gray_100,
    backgroundColor: theme.colors.gray_400,
    borderRadius: 9999,
    paddingHorizontal: 6,
    padding: 2,
  },
})
