import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Day1() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("modal");
    }, 0);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Сегодня у нас танцевальная разминка. Начнём с кайфового дня, чтобы весь
        год был кайфовый! Любишь танцевать? Да? Я тоже))) Какой твой любимый
        танец? Отвечай! Хотя нет, молчи, дай я сам угадаю… Сальса?) Угадал? Нет?
        Бачата? Нет. Аргентинское танго? Ну это вряд ли… Ну что ты от нетерпения
        качаешься… А!!! Это хаос! Ну конечно))
      </Text>
      <Text style={styles.text}>
        Что ж, тогда давай вспоминать хаос. Я, если честно, тоже люблю хаос, я
        просто-таки повелитель хаоса! ^_^
      </Text>
      <Text style={styles.text}>
        Что?? Ха-у-с? Ну какая разница! Вот зануда =Р Хаос-хаус… Хаус, так хаус.
        Давно ты его танцевал? о_О Ой-ой… ну такое… а говоришь любимый танец! Ну
        ладно, я тут чтобы всё исправить и наставить тебя на путь истинный, на
        путь настоящего хаоса! Ой, хауса &gt;_&lt;
      </Text>
      <Text style={styles.text}>Вот тебе зданьицы на сегодня:</Text>
      <Link href="/modal" style={styles.link}>
        Open modal
      </Link>
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
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
  text: {
    paddingBottom: 18,
    lineHeight: 22,
  },
});
