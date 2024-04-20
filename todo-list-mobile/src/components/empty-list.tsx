import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '@/styles/theme'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Feather name="clipboard" size={56} color={theme.colors.gray_400} />

      <Text style={styles.title}>
        Você ainda não tem tarefas cadastradas {'\n'}
        <Text style={[styles.title, styles.subTitle]}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    color: theme.colors.gray_300,
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.sm,
    lineHeight: 18,
  },
  subTitle: {
    fontFamily: theme.font_family.regular,
  },
})
