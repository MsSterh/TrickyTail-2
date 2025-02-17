import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day4() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Баланс, стопы и глаза.</Text>
      <CheckItem
        setCount={setCount}
        text="Стань ровно. Медленно наклоняйся с ровной спиной до параллели с полом, вытягивай руки вперед, а одну ногу назад. Держи баланс пару секунд, возвращайся в исходное положение. Повтори по 10 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Встань ровно, руки на поясе. Сделай 20 шагов вперед как по канату, по одной линии, пяткой касайся носка задней ноги. После каждого шага досчитай медленно до 5, затем делай следующий шаг."
      />
      <CheckItem
        setCount={setCount}
        text="Встань на четвереньки на коврике. Медленно вытяни вперед правую руку и одновременно левую ногу назад до параллели с полом. Задержись на 3-4 секунды. Медленно возвращайся в исходное положение. Повтори по 10 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Разогрей стопы: сначала одну ногу ставь на носок, затем другую, переминайся так минуту."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми мячик, зажми его между стопами. Стоя ровно (живот в себя и попу собрать, плечи вниз) медленно поднимася на носки и опускайся. Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сидя на попе на коврике, пятки вместе, вращай стопами 12 раз наружу и 12 раз вовнутрь. Подгибай и расслабляй пальцы ног тоже по 12 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай волну стопами 12 раз в одну сторону и 12 раз в другую. Волна — пальцы на себя, одни стопы вытянулась от себя, затем пальцы вытянули, потом стопы на себя (пальцы поджаты), в конце пальцы на себя вытягивай."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу на коврике, ноги вперед, шагай на попе вперед и назад по 6 шагов. Повтори 5 раз. Помогай руками, чем активнее работает спина — тем лучше!"
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на диван, расслабься. Быстро и легко поморгай 40 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Смотри вверх-вниз с максимальной амплитудой 12 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Черти зрачками круг по часовой стрелке 12 раз и против 12 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Рисуй диагональ 12 раз в одну сторону и другую диагональ 12 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Черти горизонтальную восьмёрку глазами 12 раз и 12 раз вертикальную восьмёрку."
      />
      <SecretItem isShown={count >= 13}>
        <Text style={styles.textLine}>Шикарно!</Text>
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
