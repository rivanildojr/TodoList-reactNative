import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoListItem = ({ todo }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.line}>
        <Text style={styles.lineText}>{todo.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    alignItems: "center",
    flexDirection: "row"
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7
  }
});

export default TodoListItem;
