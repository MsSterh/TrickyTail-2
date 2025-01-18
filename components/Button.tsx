import { StyleSheet, View, Pressable, Text } from "react-native";

import { Colors } from "@/constants/Colors";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    backgroundColor: Colors.light.tabIconSelected,
    borderRadius: 8,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
