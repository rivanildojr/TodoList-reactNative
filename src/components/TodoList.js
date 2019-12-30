import React from "react";
import { View, StyleSheet, Text } from "react-native";

import TodoListItem from "./TodoListItem";

import { connect } from "react-redux";

function TodoList({ todos }) {
  return (
    <View>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </View>
  );
}

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
