import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day5() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Стойки на голове + колючки.
      </Text>
      <CheckItem
        setCount={setCount}
        text="Разомни суставы рук. Сделай несколько раз круговые движения кистями, потом локтями и плечами (полные вращения рук)."
      />
      <CheckItem
        setCount={setCount}
        text="Разомни ноги: сделай по 10 махов одной ногой и другой. Стоя у спинки дивана, придерживаясь за него рукой, свободной ногой делай мах вперед и сразу назад."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай стойку на руках у стенки. Отожмись 1 раз, затем постой на руках, считая медленно до 5. Вернись в исходное положение. Сделай упражнение 6 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стойка на голове. Возьми коврик и положи на него мягкую подушку. Сделай на ней треугольник из кистей рук и локтей, положи голову на кисти рук. Выровняй спину и медленно поднимай ноги. Подержись в стойке на голове несколько счетов и опускайся. Повтори еще 2 раза."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай стойку на голове и руках. Постой немного, повтори ещё 2 раза. Посмотри видео как правильно делать, сделай как в первой части, простой вариант:"
        link="https://www.youtube.com/watch?v=xc6SGfpITXM"
      />
      <CheckItem setCount={setCount} text="Полежи на колючках минут 10-15." />
      <SecretItem isShown={count >= 6}>
        <Text style={styles.text}>
          Умничка =*
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
