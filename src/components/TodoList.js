import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";

import TodoListItem from "./TodoListItem";
import { toggleTodo, setEditingTodo } from "../actions";

function TodoList({ todos, dispatchToggleTodo, dispatchEditingTodo }) {
  return (
    <View>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onPressTodo={() => dispatchToggleTodo(todo.id)}
          onLongPressTodo={() => dispatchEditingTodo(todo)}
        />
      ))}
    </View>
  );
}

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

const mapDispatchToProps = {
  dispatchToggleTodo: toggleTodo,
  dispatchEditingTodo: setEditingTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
