import React, { useEffect, useCallback } from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import { connect } from 'react-redux'
import Config from 'react-native-config'
import { selectExamples } from '../../../example/example-selectors'
import Example from '../../../example/Example'
import { getExamples, insertExample } from '../../../example/example-actions'
import AddExampleForm from '../../containers/AddExampleForm'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})

const key = 'homeExamples'

const HomeScreen = ({
  examples,
  getHomeExamples,
  insertHomeExamples,
  navigation,
}) => {
  useEffect(() => {
    getHomeExamples()
  }, [getHomeExamples])
  const submitExample = useCallback(
    (example) => {
      insertHomeExamples(example)
    },
    [insertHomeExamples],
  )
  const goToPage = useCallback(() => {
    navigation.navigate('Page')
  }, [navigation])
  return (
    <View style={styles.container}>
      <Text>Enviroment: {Config.APP_ENV}</Text>
      <Pressable onPress={goToPage}>
        <Text>Go to Page</Text>
      </Pressable>
      <AddExampleForm onSubmit={submitExample} />
      {examples.map((e) => (
        <Example key={e.id} text={e.text} />
      ))}
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    examples: selectExamples(key)(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeExamples: () => dispatch(getExamples({ key })),
    insertHomeExamples: (data) => dispatch(insertExample({ key, data })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
