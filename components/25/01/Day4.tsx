import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day4() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Так-с, ножки у нас отдыхают, значит давай сегодня займёмся руками и
        бочками))
      </Text>
      <CheckItem
        setCount={setCount}
        text="Встань на колени спиной к стене, одну ногу выведи вперед под 90 градусов, а вторую положи колено на подушку и подними у стены носок, чтобы он стремился коснуться попы. Вытяни руки вверх. 30 раз с выдохом заводи руки еще дальше вверх и назад. Поменяй ногу и сделай ещё 30 выдохов с руками."
      />
      <CheckItem
        setCount={setCount}
        text="Встань прямо, ноги на ширине плеч, руки в районе груди, локти в стороны. Скручивай копрус влево, одновременно поднимай в колене левую ногу, затем сручивайся вправо и поднимай правую ногу. По 10 скруток в каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Встань прямо. Ноги на ширине плеч, руки в стороны. Наклоняйся с выдохом влево, вытягивая правую руку подальше в сторону. Затем наклон в другую сторону. Делай так по 10 раз в каждую из сторон. Чувствуй растяжение бочков."
      />
      <CheckItem
        setCount={setCount}
        text="Встань прямо. На 1 - наклонись с рукой, растягивая бочок, на 2 поверни корпус параллельно полу, на 3 - выведи корпус параллельно полу вперед, и обе руки вытянуты тоже параллельно полу вперед, на 4 наклонись руками вниз. Повтори всё в другую сторону. Сделай по 10 подходов на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Руки в замок за головой. Вдох — разведи локти в стороны и назад, грудь вперед. Выдох  — локти собирай спереди, округляй спину. Активно работай спиной. Сделай 20 подходов."
      />
      <CheckItem
        setCount={setCount}
        text="Круговые вращения прямыми руками в одну сторону 6 раз и в другую 6 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Круговые вращения локтевыми суставами в одну сторону 6 раз и в другую 6 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай мельницу руками, как на уроках по фигурному катанию."
      />
      <CheckItem
        setCount={setCount}
        text="Растяни у стены руки назад, как мы обычно растягиваемся. Одну руку, потом вторую."
      />
      <CheckItem
        setCount={setCount}
        text="Вытяни руки вперед, растяни пальцы, собирай медленно пальцы в кулачок, начиная с мизинчика и заканчивая большим, потом в обратном порядке раскрывая кулачок с большого пальца, по очереди каждым пальчиком до мизинчика. Сделай так 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Соедини кисти рук в районе запястье, ладошки смотрят друг на друга. Проворачивай одновременно кистями внутрь и наружу, стараясь не отрывать контакта в запястье у кистей. Сделай по 10 раз."
      />
      <SecretItem isShown={count >= 11}>
        <Text style={styles.text}>
          Вжух! Чувствуешь как хорошо? ^_^ Я пока отходил по своим делам, хайку
          тебе сочинил:
        </Text>
        <Text style={styles.textLine}>Размотай меня скорей,</Text>
        <Text style={styles.textLine}>Я один на сто попей,</Text>
        <Text style={styles.textLine}>И выбрасывай мене,</Text>
        <Text style={styles.textLine}>Я ведь грязная уже))</Text>
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
