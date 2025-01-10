import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day24() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ещё один день релакса, потому что мы с тобой поработаем над самыми
        мелкими и, казалось бы, незначительными частями нашего тела: стопами и
        глазами.
      </Text>
      <CheckItem
        setCount={setCount}
        text="Стоя ровно на коврике перед зеркалом, стопы вместе на полу, сгибай пальцы стоп под себя, затем выпрямляй. Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Походи на месте с ноги на ногу и высоким подъемом стоп, чтобы размять стопы. 20 шагов."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно, невысоко подними одну ногу, сделай 10 вращений стопой в одну сторону и 10 в другую. Поменяй ногу и повтори."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно, одну ногу немного отведи в сторону, согни в колене и подними на высокий подъем, опирайся на пальцы и надави весом. Затем с высоким подъемом стопы подожми пальцы под себя и снова надави весом, чтобы чувствовать переднюю сторону стопы. Сделай так 10 раз и смени ногу. Тоже 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно, подними большие пальцы ног вверх, остальные пальцы прижаты к полу. Сделай так 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Теперь не открывая больших пальцев от пола, оторви от пола остальные пальцы ног. Сделай 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, ноги вперед. Ноги ровные, натянутые. Пятки вместе. Вращай стопами наружку 10 раз, затем вовнутрь 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Вытяни стопы вперед, колени ровные и натянутые. Согни только пальцы стоп на себя, затем то себя. Стопа не работает, только пальцы. Делай так 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="То же упражнение, но добавляем стопу: начальное положение ноги-стопы-пальцы от себя вытянуты. 1 - пальцы на себя, 2 - стопы на себя, 3 - стопы от себя, 4 - пальцы от себя. Повтори 20 раз. Колени выключены, не сгинай. Стопы не отрывай друг от друга."
      />
      <CheckItem
        setCount={setCount}
        text="Теперь повтори упражнение вращения стоп вовнутрь и наружу по 10 раз, только используй динамику пальцев. Поджимай пальцы когда стопы на себя, а потом дорабатывай пальцами на себя, и наоборот."
      />
      <CheckItem
        setCount={setCount}
        text="Умничка, со стопами закончили, давай отдохнем глазками! Быстро и легко моргай глазками в течении 1 минуты, это улучшит кровообращение."
      />
      <CheckItem
        setCount={setCount}
        text="Подойди к окну, выбери за окном далекий объект, несколько секунд смотри на него вдаль, затем переводи взгляд на оконную раму. Повтори упражнение 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь прямо на стул. Крепко закрывай глаза на 5 секунд, затем широко открывай их. Повтори 8 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай массаж: тремя пальцами каждой руки легко нажми на верхние веки, через 1-2 секунды сними пальцы с век. Повтори 3 раза. Улучшает циркуляцию внутриглазной жидкости."
      />
      <CheckItem
        setCount={setCount}
        text="Потри руками друг о дружку, чтобы ладони стали горячими, затем закрой ладонями глаза и посиди так минутку, представляя что-то прекрасное))"
      />
      <SecretItem isShown={count >= 15}>
        <Text style={styles.textLine}>Ну же, найди меня быстрей,</Text>
        <Text style={styles.textLine}>А то я устал</Text>
        <Text style={styles.textLine}>Висеть.</Text>
        <Text style={styles.textLine}>Если ещё хоть минуту</Text>
        <Text style={styles.textLine}>Шальную,</Text>
        <Text style={styles.textLine}>А может и две,</Text>
        <Text style={styles.textLine}>Лежать я буду,</Text>
        <Text style={styles.textLine}>Кто меня съест?</Text>
        <Text style={styles.textLine}>Если меня не найдешь.</Text>
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
