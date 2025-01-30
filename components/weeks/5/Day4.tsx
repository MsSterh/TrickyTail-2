import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day4() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ноги и руки.</Text>
      <CheckItem
        setCount={setCount}
        text="Делай упражнение на 4 счета: 1 - присесть, 2 - в этом положении носки в стороны, пятки не двигаются, 3 - носки снова прямо, 4 - встать. Делай так 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Шаг вперед с присядом, шаг в сторону с присядом, шаг назад с присядом. Повтори по 10 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Исходной положение ровно стоя. Сделай шаг назад с присядом, затем встань на опорной ноге, а заднюю ногу подними (корпус можно чуток вперед подать для баланса). Снова присядь и исходное положение. Повтори по 10 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми большую баклажку воды. Ляг на коврик на спину. Согни колени. Руки с баклажкой на груди. Приподнимай корпус до положения сидя и одновременно выпрямляй руки с баклажкой над головой. Опустись в исходное положение. Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стань равно перед зеркалом, возьми баклажку двумя руками. Ноги в коленях слегка согнуты, чтобы не было напряжения на поясницу. Руки внизу, поднимай ровные руки вверх, потом к груди, потом снова вверх и опускай. Сделай 12 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Исходное положение то же. Но руки с баклажкой вверху. Колени мягкие! Спина и пресс ровные. Опускай руки, сгиная в локтях, за голову и выпрямляй до положений над головой. Сделай 20 раз. Должен чувствовать задний бицепс."
      />
      <CheckItem
        setCount={setCount}
        text="Обмотай баклажку полотенцем, чтобы ты смог ее взять в одну руку. Положение ровное, но колени согнуты и корпус на 30 градусов наклонен вперед, попа назад. Спина ровная!! Возьми в одну руку баклажку, рука внизу прямая, затем согинай локоть и отводи его за спину. Возвращай руку вниз. Сделай 20 раз на каждую руку."
      />
      <CheckItem
        setCount={setCount}
        text="По же положение, но рука с баклажкой вытянута вдоль корпуса, т. е. отведенена назад. Согинай локоть и выпрямляй. При выпрямлении руку можно чуть дальше завести. Повтори 10 раз на одну и 10 раз на другую руку."
      />
      <CheckItem
        setCount={setCount}
        text="Растяни мышцы руки: заведи одну руку вверху за голову, другой придерживай за локоть. Потом поменяй руки."
      />
      <SecretItem isShown={count >= 9}>
        <Text style={styles.textLine}>Какой красавчик!</Text>
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
