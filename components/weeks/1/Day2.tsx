import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day2() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription
        rate={4}
        time="0:25"
        text="Стопы, вращения-повороты, глаза."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми коврик. Расстели перед собой. Пройдись на носочках от одного края коврика до другого, возвращайся на пяточках. Повтори 4 раза."
      />
      <CheckItem
        setCount={setCount}
        text="То же упражнение, но вперед иди на внейшней стороне стопы, назад — на внутренней. Сделай 4 раза."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, ноги вытянуты впереди. Сделай круговые вращения стоп в одну сторону 10 раз (стопы не отрывай друг от друга) и 10 раз в другую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Натяни стопы на себя, задержись на 3-4 секунды, затем от себя, задержись на 3-4 секунды. Повтори 10 раз. Колени выключены."
      />
      <CheckItem
        setCount={setCount}
        text="Натяни один носок на себя, а другой — от себя. Задержись на 3-4 секунды. Затем поменяй стопы и ещё подержи так 3-4 сенкуд. Повтори 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стопы натянуты от себя. Натяни пальцы на себя, задержись на 1 секунду, затем — от себя и подержи 1 секунду. Повтори 10 раз. Колени выключены."
      />
      <CheckItem
        setCount={setCount}
        text="Добавляй к предыдущему упражнению стопу. Сначала пальцы на себя 1 сек, потом стопы на себя 1 сек, стопы от себя 1 сек, пальцы от себя 1 сек. Повтори 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми кубики для помощи. Сядь на пятки. Пятки и пальцы стоп вместе. Отклоняйся медленно назад, приподнимая колени, чтобы растянуть тыльную сторону стоп. Посиди так 30 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, ноги впереди. Возьми правой рукой правую стопу и сделай клювик (пальцами возьми пальцы, а пятку положи на руку), растягивай 30 секунд. Затем поменяй ногу и руку и тоже порастягивай 30 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Встань ровно. Животик и попу собери, макушка тянется наверх. Выбери длинную линию и сделай классические повороты на пальцах. Расстояние между стопами не меняется, ноги как циркуль. Корпус вращается с тазом вместе. Только голова запаздывает ,а потом опережает вращение, держа точку. Сделай 4 линии с вращениями в одну сторону и 4 линии в другую."
      />
      <CheckItem
        setCount={setCount}
        text="Встань ровно. Сделай 8 линий бальных вращений (по 4 на каждую сторону): через приставку ноги с шагом. Сначала идет корпус во вращение, а таз запаздывает, а потом таз быстро догоняет. Идет сильная скрутка в корпусе."
      />

      <CheckItem
        setCount={setCount}
        text="Подойди к окну, выбери за окном далекий объект, несколько секунд смотри на него вдаль, затем переводи взгляд на оконную раму. Повтори упражнение 5 раз."
      />
      <CheckItem setCount={setCount} text="Поморгай быстро-быстро 30 раз." />
      <CheckItem
        setCount={setCount}
        text="Закрой глаза, поводи ими влево-вправо 10 раз. Затем вверх-вниз 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Открой глаза и повтори упражнение смотреть вдаль пару секунд и вблизь. Сделай 5 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Закрой глаза, черти ими максимально большой круг по часовой стрелке 5 раз и против часовой 5 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Открой глаза и быстро похлопай ими 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Ещё раз повтори упражнение смотрения вдаль-вблизь 5 раз."
      />
      <SecretItem isShown={count >= 18}>
        <Text style={styles.text}>Ну ты и милаха))</Text>
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
