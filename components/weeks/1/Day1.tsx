import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day1() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription rate={4} time="0:15" text="Ноги, попа, чуть-чуть руки." />
      <CheckItem
        setCount={setCount}
        text="Полные приседания с выжиманием попы при вставании (20 раз)"
      />
      <CheckItem
        setCount={setCount}
        text="Шаг вперед и в этом положении медленные приседания-вставания (руки в стороны, осанка ровная, взгляд вперед) (по 10 раз на каждую ногу)"
      />
      <CheckItem
        setCount={setCount}
        text="Ложись на спину, ноги в коленях согнуты, стопы на полу, руки вдоль тела, выжимай попу наверх (20 раз), на последний раз задержись наверху (считай до 10). Повтори упражнение ещё 1 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, колени согнуты, стопы на полу. Положи колени в одну сторону и встань на них на колени без помощи рук. Затем опустить, поверни колени в другую сторону на пол и встань на колени. Вернись в исходное положение. Повтори 6 раз на каждую сторону."
      />
      <CheckItem setCount={setCount} text="Планка на локтях 1 минута." />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно делай кики ногами по 20 раз на каждую ногу, старайся ударить ногой на уровне торса."
      />
      <CheckItem
        setCount={setCount}
        text="Делай такие же кики, как в предыдущем упражнении, но только удар должен быть сбоку, как у какбоксеров. Так же по 20 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно спиной к спинке дивана (в шаге от него). Руками сзади обопрись о спинку и выжимай 20 раз руки. Тело ровное под наклоном 45 градусов. Сделай 20 отжиманий. Растягивай руки. На последнем отжимании задержись на 10 счетов."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на корточки, только колени врозь, старайся локтями раздвигать колени (сиди 30 секунд)."
      />
      <CheckItem
        setCount={setCount}
        text="Встань и наклонись, расслабь спину и виси так 1 минуту. Чувствуй расслабление в спине и напряжение под коленками"
      />
      <SecretItem isShown={count >= 10}>
        <Text style={styles.text}>Круто, ты всё сделал! Аж жарко стало!</Text>
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
