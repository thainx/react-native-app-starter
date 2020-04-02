import React, { useEffect } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { selectExamples } from '../../../example/example-selectors'
import Example from '../../../example/Example'
import { getExamples } from '../../../example/example-actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
})

const HomeScreen = ({ examples, getHomeExamples }) => {
  useEffect(() => {
    getHomeExamples()
  }, [getHomeExamples])
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput placeholder="Enter example text" style={styles.textInput} />
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      {examples.map((e) => (
        <Example key={e.id} text={e.text} />
      ))}
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    examples: selectExamples('homeExamples')(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeExamples: () => dispatch(getExamples({ key: 'homeExamples' })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
