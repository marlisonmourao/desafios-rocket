import { useState } from 'react'
import { theme } from '@/styles/theme'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export function Input({ ...rest }: TextInputProps) {
  const [focus, setFocus] = useState(false)

  return (
    <TextInput
      style={[styles.textInput, focus && styles.textInputFocus]}
      placeholderTextColor={theme.colors.gray_300}
      onFocus={() => setFocus(true)}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 54,
    padding: 16,
    backgroundColor: theme.colors.gray_500,
    borderRadius: 6,
    color: theme.colors.gray_200,
    borderWidth: 1,
  },
  textInputFocus: {
    borderColor: theme.colors.purple_dark,
  },
})
