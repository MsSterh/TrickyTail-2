import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day25() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Свободный день от меня, подари это время себе)) Включай видосик, который
        ты давно хотел посмотреть, и не теряй времени:
      </Text>
      <CheckItem setCount={setCount} text="Походи на дорожке 40 минут" />
      <SecretItem isShown={count >= 1}>
        <Text style={styles.text}>
          А помнишь ли ты горы Кавказа? Альпы? Горный хребет на северо-западе
          Тянь-Шаня (Заилийский Алатау)... Ах, мгновения! Остановитесь!)
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
