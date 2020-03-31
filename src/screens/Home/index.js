import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from 'theme/components/Text'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}
