import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day7() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Сегодня никаких танцев, день расслабона и кайфа! Йу-ху!!)
      </Text>
      <CheckItem
        setCount={setCount}
        text="Получи 20 минутный массаж всего тела."
      />
      <CheckItem
        setCount={setCount}
        text="Поблагодари меня)) Я же все-таки старался!"
      />
      <SecretItem isShown={count >= 2}>
        <Text style={styles.text}>
          Приятно, да?) Вот бы и мне кто-то сделал массажик ^_^
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
