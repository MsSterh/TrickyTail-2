import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day10() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Кардио + глаза
      </Text>
      <CheckItem setCount={setCount} text="Берпи 20 раз." />
      <CheckItem
        setCount={setCount}
        text="Присел, встал и кик (удар) ногой. На второе приседание другой ногой кик. На третье джэб рукой. На четвертое — джэб другой рукой. Повтори эту комбинацию 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Исходной положение — стань ровно, руки вниз. На раз выставляй одну ногу в сторону и руки через стороны поднимай вверх. На два — возвращайся в исходное положение. Сделай так 20 раз на одну ногу и 20 раз на вторую."
      />
      <CheckItem
        setCount={setCount}
        text="Исходной положение: ноги на ширине плеч, руки в районе груди, локти в стороны. 1 - скрутка вправо, 2 - скрутка влево, 3 - джэб левой с подъемом правой ноги, 4 - скрутка влево, 5 - скрутка вправо, 6 - джэб правой рукой с подъемом левой ноги. Сделай 20 таких комбинаций."
      />
      <CheckItem
        setCount={setCount}
        text="Руки за головой, поднимай ногу с коленом вперед, потом в сторону. Сделай 20 раз, потом поменяй ногу и еще 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Подойди к окну, выбери за окном далекий объект, 5 секунд смотри на него вдаль, затем переводи взгляд на оконную раму. Повтори упражнение 8 раз."
      />
      <CheckItem setCount={setCount} text="Поморгай быстро-быстро 30 раз." />
      <CheckItem
        setCount={setCount}
        text="Закрой глаза, поводи ими влево-вправо с максимальной амплитудой 20 раз. Затем вверх-вниз 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Открой глаза и повтори упражнение смотреть по 5 секунд вдаль и вблизь. Сделай 5 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Закрой глаза, неспеша черти ими максимально большой круг по часовой стрелке 10 раз и против часовой 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Открой глаза и быстро похлопай ими 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Ещё раз повтори упражнение смотрения вдаль-вблизь 5 раз."
      />
      <SecretItem isShown={count >= 12}>
        <Text style={styles.text}>
          Кайф! Прям мир стал резче и красивей!) Правда не мешало бы в душ
          сходить и одёжу постирать. Как думаешь?)
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
