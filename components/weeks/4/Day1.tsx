import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day1() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Планки, пресс, ноги.</Text>
      <CheckItem
        setCount={setCount}
        text="Планка на прямых руках. Сгибай колено одной ноги к себе, в исходное положение и потом в сторону. Сделай так по 16 раз на каждую ногу."
      />
      <CheckItem setCount={setCount} text="Бёрпи с отжиманием 10 раз." />
      <CheckItem
        setCount={setCount}
        text="Планка на прямых руках. Вытягивай вперед правую руку и левую ногу назад. Задержись на 2-3 секунды, затем сделай на другую ногу и руку. Повтори по 12 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Планка на локтях. Поочерено опускай таз вправо и влево. Сделай по 20 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Планка на прямых руках. На счет раз поднимай попу вверх в букву Л и дотрагивайся правой рукой левой стопы, на счет два — исходное положение. Меняй руку и ногу. Сделай по 16 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно, руки в стороны, сделай большой шаг вперед и в этом положении приседай 16 раз. Колени должны быть под 90 градусов. Поменяй ногу и снова 16 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя на коврике на четвереньках, отводи правую согнутую ногу в сторону до параллели с полом и возвращай на место. Сделай 12 раз на одну и 12 раз на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя на коврике на четвереньках, отводи правую согнутую ногу назад до параллели бедра с полом и возвращай на место. Сделай 12 раз на одну и 12 раз на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="То же исходное положение, одну нога согнута в колене и выведена назад и наверх (бедро в параллели с полом, а стопа смотрит вверх). Сделай 50 небольших быстрых толчков пяткой вверх. Поменяй ногу и повтори упражнение."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на ковприк на живот, руки вытянуты вперед. Поднимай попеременно правую руку + левую ногу, потом левую руку + правую ногу. По 20 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Из этого же положения сделай лодочку (подними руки и ноги) и поплыви (покачивай руками и ногами в воздухе) 30 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Усложненная кошечка. Ляг на коврик на живот, сделай кошечку вперед и вернись так же назад, округлив в конце спину. Повтори 8 раз."
      />
      <SecretItem isShown={count >= 12}>
        <Text style={styles.text}>Ты так хорош!))</Text>
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
