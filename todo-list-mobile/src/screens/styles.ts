import { StyleSheet } from 'react-native'
import { theme } from '../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray_700,
    paddingHorizontal: 24,
  },
  containerLogo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  containerForm: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 40,
    paddingHorizontal: 24,
  },
})
