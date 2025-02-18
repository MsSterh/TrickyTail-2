import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day2() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription rate={1} time="0:20" text="Растяжка + скрутки." />
      <CheckItem
        setCount={setCount}
        text="Сделай небольшую суставную гимнастику на кисти рук, локти, плечи, шею, грудной отдел, талию, колени и ступни. Вот такая маленькая самостоятельная работа."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно перед зеркалом на коврике. Руки на поясе. Разомнем тазобедренный сустав. Поднимай согнутую ногу вперед, проводи ее в сторону и опускай. Сделай 6 раз, повтори в обратном порядке 6 раз. И всё то же самое на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми кубики и коврик. Активно покатайся на ноге 10 раз: ровные ноги широко (одна впереди, другая сзади), сгибай колено передней ноги и чувствуй растяжение передней части бедра задней ноги, затем вставай, выравнивай колено передней ноги чувствуй растяжение под коленом. Руки на кубиках по бокам тела. Поменяй ногу и повтори 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь в полушпагат (передняя нога согнута, ступня на полу, задняя на тыльной стороне ступни лежит на полу и заднее колен на полу). Руки возле передней ноги. Покатайся 10 раз, выпрямляя и сгибая колено передней ноги. Затем по возможности опусти руки на локти, просунь руку под передней ногой и покачайся 20 мелких раз. Повтори всё на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Встань, ноги широко расставлены, наклонись с прямой спиной к одной ноге, обхвати руками колено и подержи так 20 счетов, следи за дыханием, расслабляйся, затем обхвати другую ногу и подержи тоже 20 счетов."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении руками касайся пола, ноги ровные. Сделай 20 мелких наклонов с выдохами."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на коврик на попу, ноги в стороны. Наклонись на одну ногу животиком, подержи так 20 секунд. Затем на другую 20 сек."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении наклонись к одной ноге, но уже бочком на 20 секунд, чувствуй растяжение боковых мышц. Потом на другую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя на четвереньках, правую руку заводи по полу влево, чтобы положить правое плечо на пол. Выдыхай. Затем поднимай правую руку вверх, скручивая корпус в другую сторону. Выдыхай. Сделай 16 раз на одну руку и 16 раз на другую."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на коврик на спину у стены, чтобы одна нога лежала ровно, а другая была под 90 градусов на стене. Полежи так 30 секунд, выдыхай, колени ровные. Повтори на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг у стены, ноги в стороны на продольный шпагат. Полежи так 2 минуты. Расслабляйся и дыши."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу (попа на пятках). Разомни шею: смотри влево-вправо на максимуме, по 6 раз, потом вверх-вниз по 6 раз, в бок (ушко к плечу) по 6 раз. Круговые движения головой в сторону, вперед, в другую сторону и снова вперед. По 4 раза."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении скрути корпус влево, постарайся правой рукой коснуться коврика сзади. И в другую сторону. Повтори по 6 раз в каждую сторону."
      />
      <SecretItem isShown={count >= 13}>
        <Text style={styles.text}>Умничка!</Text>
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
