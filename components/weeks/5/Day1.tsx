import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day1() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription rate={3} time="0:18" text="Ножки, кор, растяжка." />
      <CheckItem
        setCount={setCount}
        text="Приседания: ноги на ширине плеч: присел, потом стопы поднял на носочки, затем опустил стопы и выровнялся. Сделай так 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Присел, затем 2 джэба (левой-правой) и встал. 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="На коврике стань на четвереньки. Одна нога выравнивается и поднимай ее наверх 20 раз и опускай. Повтори на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Лежа на спине, согни колени, руки вдоль тела. Приподними плечи и быстро касайся попеременно правой рукой правой пятки, потом левой рукой левой пятки. Сделай 30 раз (по 15 раз в каждую сторону). Чувствуй боковой пресс."
      />
      <CheckItem
        setCount={setCount}
        text="Лежа на спине, руки вдоль тела. Ноги под углом 45 градусов ровные. Сгибай их к себе и выпрямляй вверх под 90 градусов. Потом снова сгибай к себе и выпрямляй под 45. Повтори 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Лежа на животе, руки вверх. Приподнимай руки и корпус, одновременно руки проводи по дугам, чтобы коснуться бедер. Затем возвращай их на место и опускай корпус с руками на пол. Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стань на колени, руки в стороны. Коснись правой рукой пола, а левой растяни левый бочок над головой. Посиди так в растяжении 5 секунд. Затем потяни левый бочок. Повтори упражнение еще 2 раза."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, ноги пошире. На каждом выдохе наклоняйся с правой ноге, затем посредине, потом — к левой и снова посредине. Сделай так 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении потянись посредине, задержись на 15 секунд. Спина по возможности прямая, тянись животиком и выдыхай! Расслабляйся."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай кобру (ляг на живот, руки под себя, выравнивайся от рук, поднимай корпус вверх). Полежи несколько секунд в ней, затем посмотри в этом положении влево секундочку и вправо секундочку. Повтори еще 3 раза посмотреть влево и право."
      />
      <CheckItem
        setCount={setCount}
        text="Стань на четвереньки и округли спину. Задрежись так на 5 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Встань на ровные ноги и от попы повисни всем корпусом вниз. Повиси так 1 минуту. Руки расслаблены и болтаются, голова, плечи и корпус тоже расслаблен. Дыши и расслабляйся."
      />
      <SecretItem isShown={count >= 12}>
        <Text style={styles.textLine}>Прекрасно!</Text>
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
