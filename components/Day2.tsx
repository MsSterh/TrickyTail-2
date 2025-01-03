import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day2() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Привет-привет) Рад, что ты ко мне вернулся, продожим играть?)) Сегодня у
        нас будет день ног. Да-да-да, жизнь — это не каждый день дэнс-дэнс-дэнс,
        но каждый день со мной — это праздник! И сегодня это будет очень
        продуктивный день! Давай подкачаем ножки, чтобы топать по дорожкам))
      </Text>
      <CheckItem
        setCount={setCount}
        text="Полные приседания с выжиманием попы при вставании (20 раз)"
      />
      <CheckItem
        setCount={setCount}
        text="Шаг вперед и в этом положении медленные приседания-вставания (руки в стороны, осанка ровная, взгляд вперед) (по 10 раз на каждую ногу)"
      />
      <CheckItem
        setCount={setCount}
        text="Ложись на спину, ноги в коленях согнуты, руки вдоль тела, выжимай попу наверх (20 раз), на последний раз задержись на верху (считай до 10)"
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно делай кики ногами по 20 раз на каждую ногу, старайся ударить ногой на уровне торса."
      />
      <CheckItem
        setCount={setCount}
        text="Делай такие же кики, как в предыдущем упражнении, но только удар должен быть сбоку, как у какбоксеров, с разворотом корпуса. Так же по 20 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на корточки, только колени врозь, старайся локтями раздвигать колени (сиди 30 секунд)."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно согни одну ногу в колене, коснись пяточкой попы и руками поприжимай ее к попе, растягивай переднюю мышцу бедра, считай до 20, потом то же самое на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Встань и наклонись, расслабь спину и виси так 1 минуту. Чувствуй расслабление в спине и напряжение под коленками"
      />
      <CheckItem setCount={setCount} text="Планка на локтях 1 минута" />
      <SecretItem isShown={count >= 9}>
        <Text style={styles.text}>
          Круто, ты всё сделал! Аж жарко стало, вот тебе хайку-загадка,
          отгадаешь, получишь что-то классное!
        </Text>
        <Text style={styles.textLine}>Веет ветер</Text>
        <Text style={styles.textLine}>В знойный день</Text>
        <Text style={styles.text}>Оседлай его скорей.</Text>
        <Text style={styles.textLine}>Бога ветра отыщи,</Text>
        <Text style={styles.textLine}>К небу руки возведи</Text>
        <Text style={styles.textLine}>Или шваброй пошурши)</Text>
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
