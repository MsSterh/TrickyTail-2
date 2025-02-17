import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day3() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Пресс</Text>
      <CheckItem
        setCount={setCount}
        text="Сделай 10 глубоких приседаний, при вставании выжимай попу и становись на носочки."
      />
      <CheckItem
        setCount={setCount}
        text="Руки за головой, поднимай правую ногу коленом к правому локтю 20 раз, затем 20 раз левую ногу, чувствуй бочка."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно, руки в стороны. Сделай правой ногой шаг вперед и присядь (углы в коленях под 90 градусов). Затем разверни корпус до упора вправо, затем до упора влево. Вернись в исходное положение. Сделай на другую ногу. Повтори 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на коврик на спину. РУки вдоль тела, ноги подними вверх. Приподнимай попу вместе с ногами в темпе 12 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Руки за головой. Ноги над полом. Сгибай одну ногоу в колене и тянись противоположным локтем к колену. На весу смени ногу и колено. Делай в темпе 30 раз, по 15 на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, руки сзади (опора), ноги на весу впереди. Подтягивай колени к себе в темпе 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на живот. Руки вытянуты вверху. 20 раз приподнимай корпус и одновременно своди лопатки, руки сгинаются в локтях к торсу."
      />
      <CheckItem
        setCount={setCount}
        text="Постой в планке на локтях 1 минуту."
      />
      <CheckItem
        setCount={setCount}
        text="Постой в боковой планке по 30 секунд на каждый бок."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на спину, вытянись, руки в стороны. Согни правое колено и поверни его влевую сторону, сам смотри вправо. Полежи так 30 секунд, затем смени ногу и еще полежи в скрутке 30 секунд."
      />
      <SecretItem isShown={count >= 10}>
        <Text style={styles.textLine}>Великолепный прес!</Text>
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
