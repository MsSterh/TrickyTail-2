import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day1() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Субботняя рутина — дорожка.
      </Text>
      <CheckItem setCount={setCount} text="Походи на дорожке 40 минут." />
      <SecretItem isShown={count >= 1}>
        <Text style={styles.text}>
          Умничка! =*
        </Text>
      </SecretItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 18,
  },
  text: {
    paddingBottom: 18,
    lineHeight: 22,
  },
  textLine: {
    lineHeight: 22,
  },
});
