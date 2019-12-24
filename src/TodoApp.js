import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";
import devToolsEnhancer from "remote-redux-devtools";

import TodoForm from "./components/TodoForm";
import rootReducer from "./reducers";

const store = createStore(rootReducer, devToolsEnhancer());

export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
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
