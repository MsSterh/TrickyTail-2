import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day20() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Лучше всего встречать новую неделю с хорошей разминки! Как думаешь?
        Сегодня у нас все по чуть-чуть, и руки, и ноги, и кор.
      </Text>
      <CheckItem
        setCount={setCount}
        text="Планка на прямых руках. Сгибай колено одной ноги к себе, в исходное положение и потом в сторону. Сделай так по 10 раз на каждую ногу."
      />
      <CheckItem setCount={setCount} text="Бёрпи с отжиманием 10 раз." />
      <CheckItem
        setCount={setCount}
        text="Планка на прямых руках. Вытягивай вперед правую руку и левую ногу назад. Задержись на 2-3 секунды, затем сделай на другую ногу и руку. Повтори 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Планка на локтях. Поочерено опускай таз вправо и влево. Сделай по 10 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Планка на прямых руках. На счет раз поднимай попу вверх в букву Л и дотрагивайся правой рукой левой стопы, на счет два — исходное положение. Меняй руку и ногу. Сделай по 10 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно, руки в стороны, сделай большой шаг вперед и в этом положении приседай 10 раз. Колени должны быть под 90 градусов. Поменяй ногу и снова 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя на коврике на четвереньках, отводи правую согнутую ногу до параллели с полом и возвращай на место. Сделай 10 раз на одну и 10 раз на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="То же исходное положение, одну нога согнута в колене и выведена наверх (бедро в параллели с полом, а стопа смотрит вверх). Сделай 20 небольших быстрых толчков пяткой вверх. Поменяй ногу и повтори упражнение."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на ковприк на живот, руки вытянуты вперед. Поднимай попеременно правую руку + левую ногу, потом левую руку + правую ногу. По 10 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Из этого же положения сделай лодочку (подними руки и ноги) и поплыви (покачивай руками и ногами в воздухе) 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Кошечка. Ляг на коврик на живот, сделай кошечку вперед и назад. Повтори 8 раз."
      />
      <SecretItem isShown={count >= 11}>
        <Text style={styles.text}>
          Ты так хорош! Что мне даже не хочется тебя мучить загадками, я сразу
          напишу тебе где твой сюрприз, даже буквы посортирую по алфавиту, чтобы
          было красиво))
        </Text>
        <Text style={styles.text}>«доП диккмннооооп»</Text>
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
