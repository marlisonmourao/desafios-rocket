import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'

import { theme } from '@/styles/theme'

export interface TaskProps extends TouchableOpacityProps {
  title: string
  isActiveCompleted: boolean
  onRemoveTask: () => void
}

export function Task({
  title,
  isActiveCompleted,
  onRemoveTask,
  ...rest
}: TaskProps) {
  return (
    <View style={styles.container}>
      <Pressable {...rest}>
        {isActiveCompleted ? (
          <View style={styles.iconContainer}>
            <AntDesign name="check" size={14} color={theme.colors.gray_100} />
          </View>
        ) : (
          <Feather name="circle" size={20} color={theme.colors.gray_300} />
        )}
      </Pressable>

      <View style={styles.containerTitle}>
        <Text
          style={[styles.title, isActiveCompleted && styles.titleCompleted]}
        >
          {title}
        </Text>
      </View>

      <Pressable onPress={onRemoveTask}>
        <Feather name="trash-2" size={20} color={theme.colors.gray_300} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,

    backgroundColor: theme.colors.gray_400,
    padding: 16,
    borderRadius: 8,
  },
  containerTitle: {
    width: 235,
  },
  iconContainer: {
    backgroundColor: theme.colors.purple_dark,
    borderRadius: 9999,
    padding: 3,
  },
  title: {
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_family.regular,
    color: theme.colors.gray_100,
    textAlign: 'left',
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: theme.colors.gray_300,
  },
})
