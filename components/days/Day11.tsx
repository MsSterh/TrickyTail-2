import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day11() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Сегодня я не в настроении играть. Но вижу, у тебя есть классная
        спортивная игруха на одного — дорожка. В общем, давай запрыгивай, и
        мучать тебя сегодня я не буду)) Зови как справишься))
      </Text>
      <CheckItem setCount={setCount} text="Походи на дорожке 40 минут." />
      <SecretItem isShown={count >= 1}>
        <Text style={styles.text}>
          Красавчик! Просто красавчик! Посмотри какой ты красивый! Видишь? Но
          твоё отражение что-то скрывает. Что же за ним скрывается?..
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
