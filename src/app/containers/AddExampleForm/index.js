import React from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'
import { useFormik } from 'formik'

const styles = StyleSheet.create({
  container: {
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

const AddExampleForm = ({ onSubmit }) => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      exampleText: '',
    },
    onSubmit: ({ exampleText }) => {
      if (onSubmit)
        onSubmit({
          text: exampleText,
        })
    },
  })
  return (
    <View style={[styles.container]}>
      <TextInput
        placeholder="Enter example text"
        style={styles.textInput}
        value={values.exampleText}
        onChangeText={handleChange('exampleText')}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddExampleForm
