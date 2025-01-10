import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day7() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Чем хочешь заняться сегодня?) Снова руки-ноги-хвост, всего и побольше?))
        Не? Ну ладно, тогда как насчет стоп? Стопы и волна ^_^
      </Text>
      <CheckItem
        setCount={setCount}
        text="Постели себе коврик. Пройдись по нему от начала коврика до конца на носочках, обратно возвращайся по нему на пятках. Повтори так 5 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Затем пройдись вперед на внешней стороне стопы, обратно — на внутренней. Тоже 5 раз туда и обратно."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно одна нога без веса, касается носочком пола (можно носочек подворачивать в этом упражнении), повращай пяткой 10 раз в одной стороны, 10 раз в другую. Затем вперед-назад 10 раз. В позиции вперед задержись на 15 секунд, растягивай переднюю сторону стопы. Повтори все то же самое на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на коврик, вытяни ноги. Колени ровные, давят в пол. Стопы прямые, вращай ими наружу 10 раз, затем вовнутрь 10 раз. Пятки не открывай друг от друга."
      />
      <CheckItem
        setCount={setCount}
        text="Вытяни стопы вперед, колени ровные и натянутые. Согни только пальцы стоп на себя, затем то себя. Стопа не работает, только пальцы. Делай так 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="То же упражнение, но добавляем стопу: начальное положение ноги-стопы-пальцы от себя вытянуты. 1 - пальцы на себя, 2 - стопы на себя, 3 - стопы от себя, 4 - пальцы от себя. Повтори 20 раз. Колени выключены, не сгинай. Стопы не открывай друг от друга."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми мячик, встань ровно, покатай по 10 раз под одной стопой, затем под другой."
      />
      <CheckItem
        setCount={setCount}
        text="Теперь разомнем спину. Встань на колени, руки на полу, локни не сгинай. Вращай корпусом по часовой стрелке 10 раз, затем столько же против часовой."
      />
      <CheckItem
        setCount={setCount}
        text="В этой же позиции, не сгиная локтей, выгибай спину вперед и округляй, и в обратную сторону. По 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Ты готов! Стань ровно, сделай большую волну всего тела: колени, таз, корпус, шея, голова. Можно добавить руки. Смотри на себя в зеркало. Сделай 10 волн снизу вверх и 10 волн сверху вниз (начиная с головы)."
      />
      <SecretItem isShown={count >= 10}>
        <Text style={styles.textLine}>Умничка, ты — мой герой!</Text>
        <Text style={styles.text}>Держи хокку:</Text>
        <Text style={styles.textLine}>Свой мир переверни,</Text>
        <Text style={styles.textLine}>Что было на столе,</Text>
        <Text style={styles.textLine}>Под ним теперь ищи.</Text>
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
