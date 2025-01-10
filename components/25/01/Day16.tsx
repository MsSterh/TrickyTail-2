import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day16() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Топ-топ-топ, делаем стопками топ-топ-топ)))
      </Text>
      <Text style={styles.text}>
        Ещё одна незаслуженно игнорируемая часть тела — стопы. Красивые стопы
        всегда выделяют танцора. Знаешь, в чём их красота? В силе, да. Но ещё в
        умении управлять ими! Собирать носочек к носочку на приставке.
        Подниматься на самые носочки, вырастая до небес, показывая красивый
        подъём. Сильные и гибкие стопы — это та мелкая работа, которой мы редко
        придаем значение, но которая хорошо видна на конкурсе. Так что
        поработаем-ка на стопками))
      </Text>
      <CheckItem
        setCount={setCount}
        text="Стоя ровно (колени выключены, попа и животик подтянуты), медленно поднимайся на носки и опускайся на пол. Не отрывай пятки друг от друга. 20 раз"
      />
      <CheckItem
        setCount={setCount}
        text="Одну ногу согни, медленно поднимайся на одной стопе и опускайся, следи, чтобы стопа смотрела прямо как в предыдущем упражнении. Можно придерживаться за стену. Смотри на себя в зеркало. Сделай по 10 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Покатай мячик под каждой стопой по 15 секунд, чтобы размять мышцы."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, ноги ровные, одну ногу положи на бедро другой. Одной рукой придерживай согнутую ногу за щиколотку, второй рукой возьми ее за носки и повращай 10 раз в одну сторону, 10 раз в другую, возьми за носочки и посогинай пальцы в одну и в другую сторону 10 раз, затем 5 раз костяшками руки поелозь по всей стопе туда и обратно аля массажик."
      />
      <CheckItem
        setCount={setCount}
        text="Погоди по коврику на носочках туда, и обратно — на пяточках. По 5 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Возьму кубик стань на него носочками, чтобы пятка свисала. Поднимайся на носочках и опускайся, чтобы пятка почти касалась пола. Если тяжело, придерживайся пальчиком за стену. Смотри на себя в зеркало. Колени выключены, все в себя, стой ровненько. Сделай 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно на высокой подъеме, опускай поочередно одну стопу на пол, вторая продолжает находится в высокой подъеме. Затем поднимайся на высокий подъем и опуская вторую стопу. Повтори по 10 раз на каждую ногу. Следи, чтобы подъем стопы оставался высоким."
      />
      <CheckItem
        setCount={setCount}
        text="А теперь растяжка: обопрись руками о стол или спинку дивана. Отойди от него одной вытянутой ногой (вторая согнута), и растягивай заднюю поверхность голени 15 секунд. Затем на другую ногу. Таз толкай вперед. Повтори еще раз."
      />
      <SecretItem isShown={count >= 8}>
        <Text style={styles.textLine}>За дверцею тайной</Text>
        <Text style={styles.textLine}>Нашел свой приют.</Text>
        <Text style={styles.textLine}>Я знаю, меня здесь</Text>
        <Text style={styles.text}>Ни в жизнь не найдут!</Text>

        <Text style={styles.textLine}>На дверце нет ручки,</Text>
        <Text style={styles.textLine}>Но не беда,</Text>
        <Text style={styles.textLine}>Её отворить</Text>
        <Text style={styles.text}>Не составит труда.</Text>

        <Text style={styles.textLine}>На полке за дверцей</Text>
        <Text style={styles.textLine}>Лежать хорошо,</Text>
        <Text style={styles.textLine}>Просторно и узко,</Text>
        <Text style={styles.text}>Вот только темно.</Text>

        <Text style={styles.textLine}>Здесь нет ни трусов,</Text>
        <Text style={styles.textLine}>Ни носков, ни белья,</Text>
        <Text style={styles.textLine}>Ни проводов,</Text>
        <Text style={styles.text}>Ни старья, ни новья.</Text>

        <Text style={styles.textLine}>Почти одинок,</Text>
        <Text style={styles.textLine}>Но дело не в том,</Text>
        <Text style={styles.textLine}>Тайник сей не тайный</Text>
        <Text style={styles.textLine}>На месте виднОм!</Text>
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
