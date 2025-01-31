import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day6() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ну что же новая неделя, новые заботы) Пора бы разогнать кровь по телу.
        Сделаем-ка с тобой упражнения на всё: и на ноги, и на руки, и на пресс!
        Прокачаемся))) Го, го! В темпе))
      </Text>
      <CheckItem
        setCount={setCount}
        text="Сделай суставную гимнастику. Придумай себе по 1-2 упражнения на следующие суставы: кисти рук, локти, плечи, шея, талия, бедро, колени, стопы."
      />
      <CheckItem
        setCount={setCount}
        text="Берпи 20 раз, можно без отжимания."
      />
      <CheckItem
        setCount={setCount}
        text="Руки за головой, сгибай поочерено колени правой, потом левой ноги. Чувствуй бочка."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на коврик на спину. Складочка 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Перевернись на бочок. Боковая складочка 10 раз на каждую сторону (колени не отрывай друг от друга). Делай по 5 раз с сгибанием коленей к себе и 5 раз с ровными ногами."
      />
      <CheckItem
        setCount={setCount}
        text="Отожмись 5 раз широким хватом, локти в стороны и 5 раз узким хватом, локти вдоль тела."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на коврик лицом вниз. Вытяни вперед руки. Одной рукой касайся бедра, одновременно приподнимай корпус. Делай так по 10 раз на каждую руку."
      />
      <CheckItem
        setCount={setCount}
        text="Руки за головой, отрывай одновременно корпус и ноги, 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Вытянись в змею, посиди так секунд 10, затем вытянись руками вперед, попа на пятках, тоже посиди так секунд 10-15."
      />
      <SecretItem isShown={count >= 9}>
        <Text style={styles.textLine}>Прокачался, похудел, </Text>
        <Text style={styles.textLine}>Одни рёбрышки торчат,</Text>
        <Text style={styles.textLine}>Жаром дышит мой удел</Text>
        <Text style={styles.textLine}>Чресла железные горят</Text>
        <Text style={styles.textLine}>И скрывают за собой</Text>
        <Text style={styles.textLine}>Сладкий дар с большой звездой.</Text>
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
