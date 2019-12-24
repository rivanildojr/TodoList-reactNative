import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = ({ onChangeText, value }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    underlineColorAndroid="#c5c5c5"
  />
);

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    paddingBottom: 15
  }
});

export default Input;
