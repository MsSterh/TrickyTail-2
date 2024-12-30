import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CheckItem({ text, setCount }) {
  const [isChecked, setChecked] = useState(false);

  const check = () => {
    setChecked(!isChecked);
    setCount((c: number) => (!isChecked ? c + 1 : c - 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={check}
          color={isChecked ? "#37A87B" : undefined}
        />
        <Text style={styles.paragraph}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#DBD6EE",
    borderTopWidth: 2,
    marginHorizontal: -18,
    // width: "100%",
  },
  section: {
    padding: 18,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "90%",
  },
  paragraph: {
    paddingBottom: 18,
    lineHeight: 22,
  },
  checkbox: {
    marginRight: 16,
    marginTop: 2,
  },
});
