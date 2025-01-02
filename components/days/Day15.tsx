import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day15() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Среда — это маленькая пятничка, ква?) А ну вставай играй со мной,
        туц-туц-туц!)) Сегодня мы разгоним кровь во всем теле и в самых
        застоявшихся местах, внимание к которым так незаслуженно мало! Ты понял
        о чем я?)) Я о твоих глазках! Будем их разминать)))) В прямом смысле
        этого слова) Погнали!
      </Text>
      <CheckItem setCount={setCount} text="Берпи 10 раз." />
      <CheckItem
        setCount={setCount}
        text="Присел, встал и кик (удар) ногой. На второе приседание другой ногой кик. На третье джэб рукой. На четвертое — джэб другой рукой. Повтори эту комбинацию 8 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай 10 легких прыжков: исходное положение ровно, руки вниз, ноги вместе. На первый прыжок ноги в сторону, руки через стороны вверх. На второй прыжок исходной положение. Сделай 20 прыжков."
      />
      <CheckItem
        setCount={setCount}
        text="Исходной положение: ноги на ширине плеч, руки в районе груди, локти в стороны. 1 - скрутка вправо, 2 - скрутка влево, 3 - джэб левой с подъемом правой ноги, 4 - скрутка влево, 5 - скрутка вправо, 6 - джэб правой рукой с подъемом левой ноги. Сделай 10 таких комбинаций."
      />
      <CheckItem
        setCount={setCount}
        text="Руки за головой, поднимай ногу с коленом вперед, потом в сторону. Сделай 10 раз, потом поменяй ногу и еще 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Подойди к окну, выбери за окном далекий объект, несколько секунд смотри на него вдаль, затем переводи взгляд на оконную раму. Повтори упражнение 5 раз."
      />
      <CheckItem setCount={setCount} text="Поморгай быстро-быстро 30 раз." />
      <CheckItem
        setCount={setCount}
        text="Закрой глаза, поводи ими влево-вправо 20 раз. Затем вверх-вниз 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Открой глаза и повтори упражнение смотреть вдаль пару секунд и вблизь. Сделай 5 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Закрой глаза, черти ими максимально большой круг по часовой стрелке 10 раз и против часовой 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Открой глаза и быстро похлопай ими 10 раз."
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
