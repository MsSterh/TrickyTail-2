import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day5() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription rate={5} time="0:25" text="Упражнения на статику." />
      <CheckItem
        setCount={setCount}
        text="Присядь, постой так 15 секунд. Повтори ещё 2 раза."
      />
      <CheckItem
        setCount={setCount}
        text="Присядь в стульчик у стены, чтобы спиной опираться на стену, руки вытяни вперед, посиди 15 секунд. Повтори еще 2 раза."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай выпад вперед, руки в стороны, спина ровно, колени под 90 градусов.  Посиди в выпаде на одну ногу 15 секунд, потом на вторую ногу 15 сек. Всего 3 подхода (на втором подходе руки вверх, на третьем — на поясе)."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на спину на коврике. Руки вдоль тела, ноги согнуты в коленях, стопы на полу. Одну ногу подними вверх и вместе с этим подними таз. Подержи 10 секунд. Затем повтори с другой ногой. Сделай таких 6 повторений."
      />
      <CheckItem
        setCount={setCount}
        text="Ласточка: стоя на одной ноге, все тело наклони до параллели с полом, руки в стороны. Стой 15 секунд. Поменяй ногу. Делай по 5 раз на каждую ногу."
      />
      <CheckItem setCount={setCount} text="Планка на руках, стой 30 секунд." />
      <CheckItem
        setCount={setCount}
        text="Из планки перевернись на боковую планку, рука вверх, стой 30 секунд. Затем на другую сторону 30 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Повтори планку, но на локтях, 30 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Из этой планки повернись в сторону, рука вверх и приподними верхнюю ногу, задержись на 30 секунд, затем поменяй сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Из положения планки на руках подними руку и противоположную ногу, постой 15 секунд, затем поменяй руку и ногу. Повтори еще 2 раза."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на живот, руки вверх. Поднимайся в лодочку, считай до 10 и опускайся. Сделай 5 повторений."
      />
      <SecretItem isShown={count >= 11}>
        <Text style={styles.text}>Ох, как славно!</Text>
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
