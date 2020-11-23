import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
})

const PageScreen = ({ examples, getHomeExamples, insertHomeExamples }) => {
  return <View style={styles.container} />
}

export default PageScreen
