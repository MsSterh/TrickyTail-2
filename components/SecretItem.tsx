import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SecretItem({ isShown, children }) {
  return (
    <View style={styles.container}>
      {isShown ? (
        <View style={styles.section}>{children}</View>
      ) : (
        <View style={styles.section}>
          <Text style={styles.paragraph}>
            Что-то ты не всё сделал... А ну не ленись!
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#DBD6EE",
    borderTopWidth: 2,
    marginHorizontal: -18,
  },
  section: {
    padding: 18,
  },
  paragraph: {
    paddingBottom: 18,
    lineHeight: 22,
  },
});
