import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day13() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ох, как ножки болят после вчера… Давай-ка их порастягиваем! И заодно
        пресс покачаем. А?)
      </Text>
      <CheckItem
        setCount={setCount}
        text="В планке на руках сгибай одну ногу коленкой к груди, потом коленкой к локтю, потом диагональ к другому локтю. Делай так по 10 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="В планке поднимай по очереди прямые ноги назад и вверх. По 20 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="В планке поочерено отводи ногу в сторону над полом и возвращай на место. Делай так по 20 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="В планке на локтях опускай поочередно попу то в одну, то в другую сторону. По 20 раз в каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на живот, руки вытяни вперед, голова в пол. Приподнимай корпус и руками делай полукруг на весу, коснись бедер и снова верни руки вверх, опустись. Так делай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Лежа на спине, согни ноги в коленях, приподнимай корпус и скручивайся диагонально, пытаясь достать правой рукой за левым бедром, потом левой рукой за правым бедром. Скручивайся по 20 раз в каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Лежа на спине, согни ноги в коленях, руки вдоль тела, приподнимай максимально таз и опуская его. Сделай 20 раз и на последний раз задержись на 5 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай березку, подержи ее секунд 10 и закидывай ноги за голову, растягивай спину, можешь походить ногами за головой влево и вправо. Как закончишь, медленно опускай ноги, позвонок за позвонком."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на ровные ноги, сделай 10 активных наклонов с ровной спиной к ступням с выдохом, на вдох выравнивайся и своди лопатки за спиной."
      />
      <CheckItem
        setCount={setCount}
        text="Разведи на полу ноги, сделай на выдохе наклон корпуса к левой ноге, потом на выдохе наклон посредине, потом на выходе наклон к правой ноге, потом снова на выдохе наклон посредине. Повтори 8 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми под руки кубики. Стань на колени, теперь правую ногу вытяни вперед, выровняй колено. Наклоняйся с выдохом к ровной правой ноге, затем в этой позиции сгибай колено и переноси таз ближе вперед, чтобы чувствовать растяжение паха у левой ноги. Теперь катайся так 20 раз на одну ногу, потом на другую. Согнул (потянул мышцу задней ноги) и снова выпрямил и наклонился к ровной ноге (чувствуй мышцу под коленкой). Делай первые 10 раз не торопясь, а следующие 10 раз активно!"
      />
      <SecretItem isShown={count >= 11}>
        <Text style={styles.text}>
          Красота! Ты так хорош, что я бы дал тебе медаль! Ну или хотя бы
          кубок!))
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
