import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/focus/Focus";

// Export default tells us this is the main thing we export
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {/* Simple ternary to decide what to show */}
      {focusSubject ? (
        <Text> This is where a timer will be </Text>
      ) : (
        <Focus></Focus>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f25a5a",
    alignItems: "center",
    justifyContent: "center",
  },
});
