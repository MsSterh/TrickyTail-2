import Checkbox from "expo-checkbox";
import { useState, Dispatch, SetStateAction } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import * as Linking from "expo-linking";

type CheckItemProps = {
  text: string;
  link?: string;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function CheckItem({
  text,
  link = "",
  setCount,
}: CheckItemProps) {
  const [isChecked, setChecked] = useState(false);

  const check = () => {
    setChecked(!isChecked);
    setCount((c: number) => (!isChecked ? c + 1 : c - 1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.section} onPress={check}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={check}
          color={isChecked ? "#867EA5" : undefined}
        />
        <View>
          <Text style={styles.paragraph}>{text}</Text>
          {link && (
            <Button title={link} onPress={() => Linking.openURL(link)} />
          )}
        </View>
      </TouchableOpacity>
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
