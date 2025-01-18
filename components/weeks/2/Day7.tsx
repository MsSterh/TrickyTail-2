import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day7() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ча-ча и самба.
      </Text>
      <CheckItem
        setCount={setCount}
        text="Найди хорошую музыку для чачи и самбы."
      />
      <CheckItem
        setCount={setCount}
        text="Разомни все суставы по чуть-чуть. Самостоятельно))"
      />
      <CheckItem
        setCount={setCount}
        text="Виск. Под музыку через счет сделай шаг в сторону, согни колено и подтягивай свободную ногу вращением бедра. Выпрями колени (колено в колено) и снова смягчи. Повтори в другую сторону. Сделай таких 8 раз."
      />
      <CheckItem setCount={setCount} text="И еще 10 раз под музыку." />
      <CheckItem
        setCount={setCount}
        text="Альтернативный самба-ход или самба-ход на месте. Начальная позиция: обе ноги мягкие вместе, от бедра начинай вращение и выбрасывай одну ногу прямую назад. Выравнивай переднее колено и снова сгибай, перенося вес на переднюю ногу и разворачивая высоко бедро. Вращением бедра забирай заднюю ногу к себе. Повтори на другую ногу. Делай медленно через такт по 8 раз на каждую ногу."
      />
      <CheckItem setCount={setCount} text="И еще 10 раз под музыку." />
      <CheckItem
        setCount={setCount}
        text="Вольта и батафога. Сделай в бок три вольты и батафогу, смени ногу и снова 3 вольты и батафогу. Повтори эту комбинацию еще 4 раза медленно."
      />
      <CheckItem
        setCount={setCount}
        text="2 медленные вольты + 3 быстрые + 1 батафога. Повтори 8 раз под музыку."
      />
      <CheckItem
        setCount={setCount}
        text="А теперь вспомним ча-ча-ча. Стой ровно перед зеркалом. Подай вес чуть-чуть вперед. Под музыку делай минутку ча-ча-раз-два-три на месте, ноги под собой, только бедра работают и колени."
      />
      <CheckItem
        setCount={setCount}
        text="Основной ход чачи. Шаг в сторону на раз, вперед-назад, в сторону, ча-ча, в сторону, назад, вперед, в сторону, ча-ча. Сделай медленно 6 раз. И еще 8 раз быстро под музыку."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай 6 раз медленно и 8 раз под музыку основной ход с локом вместо ча-ча. Тут активное продвижение не в сторону, а вперед-назад."
      />
      <CheckItem
        setCount={setCount}
        text="Хип-твист. Вместо ча-ча бедро рисует полукруг и ставится на носок, а вторая нога приставляется рядом. Сделай 6 раз медленно и 8 раз под музыку."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай Нью-Йорк 6 раз медленно и 8 раз под музыку. Раскрытие наружу, можно с рукой."
      />
      <CheckItem
        setCount={setCount}
        text="Повтори Нью-Йорк 6 раза медленно и 8 раз под музыку, только вместо ча-ча делай поворот."
      />
      <SecretItem isShown={count >= 14}>
        <Text style={styles.text}>
          Ну ты горяч!!))
        </Text>
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
