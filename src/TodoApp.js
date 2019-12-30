import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Provider } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import store from "../src/store";

export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});
