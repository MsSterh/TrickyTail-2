import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day31() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ого-ого! Смотри-ка, вот и месяц прошел! Как же быстро! Спасибо, что
        занимался со мной всё это время, мне было очень весело)) Вот прям от
        души! Так и быть, ты заслужил этот день. Сегодня у нас последняя убойная
        тренировка на ноги, руки, кор и в конце ещё порастягиваемся!! Начнём-ка
        мы с кардио и бёрпи!
      </Text>
      <Text style={styles.text}>
        Что? о_О Ты не хочешь? Ну ладно, ладно, ты итак хорошо потрудился в этот
        месяц, скинул пару килограмм. Чего уж там, заслужил.
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
          Ну а подарок… подарком был этот месяц, проведённый со мной! Хахаха)))
        </Text>
        <Text style={styles.text}>
          Ладно-ладно, шучу. Есть у меня для тебя ещё кое-что, ищи свой
          новогодний подарок на своём законном месте))
        </Text>
        <Text style={styles.text}>
          И до новых встреч! Приду, как только у тебя будет что-нибудь
          вкусненькое для меня ^_^
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
