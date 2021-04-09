import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
// Preferably don't export default unless in the main App.js
// By using export default it forces the consuming application to give the component a name, as opposed to taking the name from the component itself
// One file should export one thing, but its more of a design preference
// export const is a named export
export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  titleContainer: {
    flex: 0.5,
    padding: 20,
    justifyContent: "center",
  },
  inputContainer: {
    paddingTop: 20,
  },
});
