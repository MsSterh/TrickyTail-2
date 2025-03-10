import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day2() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription rate={3} time="0:20" text="Махи ногами и классика." />
      <CheckItem
        setCount={setCount}
        text="Стань ровно боком к стене или столу. Придерживайся одной рукой. Противоположной прямой ногой делай в темпе махи вперед вверх. 20 махов на одну ногу и 20 махов на вторую."
      />
      <CheckItem
        setCount={setCount}
        text="То же самое положение, но делай махи ногой назад, тоже по 20 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Повернись лицом к стене или столу. Сделай 20 махов в сторону одной ногой, затем 20 махов — другой."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя боком, сделай мах вперед, затем приседай на второй ноге, а свободную прямую отведи назад в полушпагат. Встань на опорной ноге и повтори упражнение 15 раз на одну ногу и 15 раз на вторую."
      />
      <CheckItem
        setCount={setCount}
        text="Повернись лицом к столу. Сделай 20 сильных махов одной ногой назад, можешь наклоняться вперед. Повтори все на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно в 6 позицию ног, придерживаясь рукой за стол, покачайся на стопах, приподнимаясь на носочки (пятки вместе) 30 быстрых раз."
      />
      <CheckItem
        setCount={setCount}
        text="А теперь классика. Стань перед зеркалом в 1 позицию, носки врозь, руки в подготовительной позиции. Выведи ногу во 2-ую, затем в 3, 4, 5 и снова в 1-ую позицию. Следи за выворотностью стопы. Попу и животик подобрал, колени ровные. Повтори 10 раз. Затем другой ногой 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="В первой позиции ног, руки в подготовительной. Переведи руки в первую позицию, потом во вторую, третью, аленже и снова в подготовительную. Сделай 10 подходов."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя у стола в 5-ой позиции ног, рукой придерживайся за стол. Вторая рука в сторону и ногу выводи по полу во 2-ую позицию, в конце подними носочек, пятка смотрит в пол. Бедра не качай, не проваливай. Верни ногу в 5-ую позицию, меняя то вперед приставляй, то назад. Повтори на каждую ногу по 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Так же повтори упражнение с выводом ноги вперед 20 раз и назад 20 раз. И на другую ногу."
      />
      <SecretItem isShown={count >= 10}>
        <Text style={styles.text}>Ты хорошо потрудился.</Text>
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
