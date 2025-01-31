import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day8() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Как же хорошо с тобой гулять))) Всё-то ты делаешь, на всё-то ты мастак!)
        Повторим тогда упражнения на ножки + пресс, ну и порастягиваемся
        немножко. Ты как?)
      </Text>
      <CheckItem
        setCount={setCount}
        text="На коврике ляг на спину, руки сзади на локтях. Согни одну ногу, а второй сделай 10 активных махов, затем поменяй ногу."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении сделай мах ногой на себя, затем второй веди по полу в сторону. Повтори 6 раз на одну ногу, затем 6 раз на другую."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на бок, на локоть. Ноги ровные. Сделай 20 активных боковых махов ровной ногой вверх, затем 20 махов другой ногой на другом боку."
      />
      <CheckItem
        setCount={setCount}
        text="Лежа на левом боку и на локте, правую ногу согни в колене и поставь стопу вперед, перед левой ногой. Правой рукой возьмись за щиколотку правой ноги. Левой ногой делай 40 раз подъем вверх, чувствуй внутреннюю мышцу. Затем перевернись на другой бок и повтори все на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, обопрись руками сзади и чуть-чуть наклонись назад. Быстро подтягивай ноги к себе и от себя (на весу). Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на коврик на спину, руки за головой, ноги на весу над полом. Поочередно сгибай ногу и тянись противоположным локтем. Затем другую ногу. Скручивайся в темпе. Сделай 40 раз (по 20 раз в каждую сторону)."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на живот, руки вытянуты вперед. Приподнимай корпус и одновременно разводи руки в стороны и сгибай локти, своди лопатки за спиной. Сделай так 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай березку, задержись в ней на 15 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Из березки сначала одну ногу веди носочком вдоль другой, затем меняй ноги, делай по 4 раза на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Опусти из березки ноги за голову.  Полежи так секунд 10-15, затем стопами пройдись слево и справо. Чувствуй растяжение в спине и шее. Согни колени, полежи секунд 5 и снова выйди в березку. Из березки медленно опускай спину и ноги, позвонок за позвонком. Повтори еще 1 раз."
      />
      <SecretItem isShown={count >= 10}>
        <Text style={styles.text}>Как же ты хорош! *обнимает*</Text>
        <Text style={styles.textLine}>Слушай загадку: </Text>
        <Button
          title="https://wordle.belousov.one/?word_id=jcg5XE3tBQd"
          onPress={() =>
            Linking.openURL("https://wordle.belousov.one/?word_id=jcg5XE3tBQd")
          }
        />
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
