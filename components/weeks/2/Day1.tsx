import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day1() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription rate={4} time="0:15" text="Бёрпи + пресс + спина." />
      <CheckItem
        setCount={setCount}
        text="Сделай суставную гимнастику. Придумай себе по 1-2 упражнения на следующие суставы: кисти рук, локти, плечи, шея, талия, бедра, колени, стопы."
      />
      <CheckItem
        setCount={setCount}
        text="Берпи 20 раз, можно без отжимания."
      />
      <CheckItem
        setCount={setCount}
        text="Стой ровно. Руки за головой, сгибай поочерено колени в бок правой, потом левой ноги. Чувствуй бочка. По 10 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на коврик на спину. Складочка 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Перевернись на бочок. Боковая складочка 12 раз на каждую сторону (колени не отрывай друг от друга). Делай по 6 раз со сгибанием коленей к себе и 6 раз с ровными ногами."
      />
      <CheckItem
        setCount={setCount}
        text="Отожмись 8 раз широким хватом, локти в стороны и 8 раз узким хватом, локти вдоль тела."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на коврик лицом вниз. Вытяни вперед руки. Одной рукой касайся бедра, одновременно приподнимай корпус. Делай так по 10 раз на каждую руку."
      />
      <CheckItem
        setCount={setCount}
        text="Положение то же. Руки за головой, отрывай одновременно корпус и ноги, 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Вытянись в змею, посиди так секунд 10, затем вытянись руками вперед, попа на пятках, тоже посиди так секунд 10-15."
      />
      <SecretItem isShown={count >= 9}>
        <Text style={styles.text}>Супер!!! Так держать!</Text>
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
