import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day29() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        А что насчет баланса? Давай-ка проверим-ка. Заодно и над стопами сегодня
        поработаем и немножко глазки порасслабляем.
      </Text>
      <CheckItem
        setCount={setCount}
        text="Стань ровно. Медленно наклоняйся с ровной спиной до параллели с полом, вытягивай руки вперед, а одну ногу назад. Держи баланс пару секунд, возвращайся в исходное положение. Повтори по 10 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Встань ровно, руки на поясе. Сделай 20 шагов вперед как по канату, по одной линии, пяткой касайся носка задней ноги. После каждого шага досчитай медленно до 5, затем сделай следующий шаг."
      />
      <CheckItem
        setCount={setCount}
        text="Встань на четвереньки на коврике. Медленно вытяни вперед правую руку и одновременно левую ногу назад до параллели с полом. Задержись на 3-4 секунды. Медленно возвращайся в исходное положение. Повтори по 10 раз на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Разогрей стопы: сначала одну ногу ставь на носок, затем другую, переминайся так секунд 20."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно (живот в себя и попу собрать, плечи вниз) поднимася на носки, не открывай пятки и подъемы друг от друга. Делай 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сидя на попе на коврике, пятки вместе, вращай стопами 10 раз наружу и 10 раз вовнутрь. Подгибай и расслабляй пальцы ног тоже по 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай волну стопами 10 раз в одну сторону и 10 раз в другую. Волна — пальцы на себя, одни стопы вытянулась от себя, затем пальцы вытянули, потом стопы на себя (пальцы поджаты), в конце пальцы на себя вытягивай."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу на коврике, ноги вперед, шагай на попе вперед и назад по 5 раз. Помогай руками, чем активнее работает спина — тем лучше!"
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на диван, расслабься. Быстро и легко поморгай 30 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Смотри вверх-вниз с максимальной амплитудой 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Черти зрачками круг по часовой стрелке 10 раз и против 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Рисуй диагональ 10 раз в одну сторону и другую диагональ 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Черти горизонтальную восьмёрку глазами 10 раз и 10 раз вертикальную восьмёрку."
      />
      <SecretItem isShown={count >= 13}>
        <Text style={styles.textLine}>Я прозрачна и легка,</Text>
        <Text style={styles.textLine}>Широка, длинна, светла.</Text>
        <Text style={styles.textLine}>Глаз не радую, пока</Text>
        <Text style={styles.textLine}>Солнце видно у окна.</Text>
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
