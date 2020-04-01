import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Text from 'theme/components/Text'
import { getHomeExamples } from '../../../example/selectors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Home = ({ examples }) => {
  return (
    <View style={styles.container}>
      {examples.map((e) => (
        <Text key={e.id}>{e.text}</Text>
      ))}
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    examples: getHomeExamples(state),
  }
}

export default connect(mapStateToProps)(Home)
