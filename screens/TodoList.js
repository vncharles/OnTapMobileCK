import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { fetchTodo, addTodo, updateTodo, deleteTodo } from '../redux/actions'
import { connect } from 'react-redux'

const TodoList = ({todos, route, navigation, fetchTodo, addTodo, updateTodo, deleteTodo}) => {
  const [newTask, setNewTask] = useState('')
  const {user} = route.params;
  useEffect(() => {
    fetchTodo(user?.id)
  }, [user])

  const handleAdd = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <h2>Todo list</h2>
      <View style={styles.containerAdd}>
        <TextInput onChangeText={setNewTask} />
        <TouchableOpacity onPress={handleAdd}>Add</TouchableOpacity>
      </View>
        
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = {
  fetchTodo,
  addTodo,
  updateTodo,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  containerAdd: {
    width: "300px",
    margin: 10
  }
})