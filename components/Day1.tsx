import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day1() {
  const [count, setCount] = useState(0);

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
      <Text style={styles.text}>Вот тебе зданьица на сегодня:</Text>
      <CheckItem
        setCount={setCount}
        text="Найди подходящую музыку для хауса на ютубе или где она у тебя там хранится, качовую музыку, под которую можно двигаться. Найди и включай. Да, и как найдешь, не забывай отмечать задание сделанным, если закроешь все задания — тебя ждёт что-то хорошее)"
      />
      <CheckItem
        setCount={setCount}
        text="Итак, музыка есть. Теперь нам нужны движения. Давай вспоминать что у нас там есть, а ну покажи как танцуется… падебуре."
      />
      <CheckItem setCount={setCount} text="Хилстеп" />
      <CheckItem setCount={setCount} text="Сайд степ" />
      <CheckItem setCount={setCount} text="Лузлегз" />
      <CheckItem
        setCount={setCount}
        text="Соедини эти 4 движения: падебуре, хилстеп, сайд степ и лузлегз."
      />
      <CheckItem
        setCount={setCount}
        text="Теперь давай вспомним другие 4 движения: трейн, фермер, свирл и сальса степ."
      />
      <CheckItem
        setCount={setCount}
        text="Молодец! Как ты хорош! А как насчет ещё четверки движения? Помнишь их? Сайд волк, сайд хоп, шафл, сальса хоп."
      />
      <CheckItem
        setCount={setCount}
        text="Если что-то не помнишь, ничего страшного, just google it. Хаха! Заценил мой английскый?) Не отвлекаемся, держи ещё четверку: хардл (фермер с ресетом), скрибл фут, змейка, афростеп."
      />
      <CheckItem
        setCount={setCount}
        text="Думаешь это всё? У меня есть в рукаве ещё один пачкован для продвинутых: лотус, скизерс, хэппифит, реджект."
      />
      <CheckItem
        setCount={setCount}
        text="Ну и для совершенного крышесношения ударная троица: тип-тап-тоу, крис-крос и кролик Роджер. И это не новые движения, ты всё это уже танцевал, когда-то."
      />
      <CheckItem
        setCount={setCount}
        text="Вспомнил? Красавчик! А теперь включай музыку погромче и танцуй! Ты вспомнил все движения, используй их и импровизируй!))"
      />
      <SecretItem isShown={count >= 12}>
        <Text style={styles.text}>
          Умничка! Ты аж запыхался… Да и я устал) Остался последний квест —
          сделай мне массаж мордочки вон той японской штукой ^_^ и я тебя
          отблагодарю))
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
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
  text: {
    paddingBottom: 18,
    lineHeight: 22,
  },
});
