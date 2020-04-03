import React, { useEffect, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { selectExamples } from '../../../example/example-selectors'
import Example from '../../../example/Example'
import { getExamples, insertExample } from '../../../example/example-actions'
import AddExampleForm from '../../container/AddExampleForm'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})

const key = 'homeExamples'

const HomeScreen = ({ examples, getHomeExamples, insertHomeExamples }) => {
  useEffect(() => {
    getHomeExamples()
  }, [getHomeExamples])
  const submitExample = useCallback(
    (example) => {
      insertHomeExamples(example)
    },
    [insertHomeExamples],
  )
  return (
    <View style={styles.container}>
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
