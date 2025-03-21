import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day3() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription
        rate={3}
        time="0:11"
        text="Ножки + пресс, ну и порастягиваемся немножко."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно. Ноги пошире. Сядь в плее и сделай руками 4 удара вперед (как в боксе), и вставай. Повтори 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стань боком к зеркалу. Присядь, сделай 4 шага в сторону в этом положении и вставай. Затем присядь, сделай 4 шага в присяде обратно и вставай. Повтори 6 раз."
      />
      <CheckItem
        setCount={setCount}
        text="На коврике ляг на спину, ноги наверх прямые. Разведи и сведи ноги по 20 раз. Разводи до максимума."
      />
      <CheckItem
        setCount={setCount}
        text="На коврике на спине, руки сзади на локтях. Согни одну ногу, а второй сделай 10 активных махов, затем поменяй ногу."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении сделай мах ногой на себя, затем веди её по полу в сторону. Повтори 6 раз на одну ногу, затем 6 раз на другую."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на бок, на локоть. Ноги ровные. Сделай 20 активных боковых махов ровной ногой вверх, затем 20 махов другой ногой на другом боку."
      />
      <CheckItem
        setCount={setCount}
        text="На пресс. Сядь на попу, обопрись руками сзади и чуть-чуть наклонись назад. Быстро подтягивай ноги к себе и от себя (на весу). Сделай 20 раз."
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
        text="Опусти из березки ноги за голову. Полежи так секунд 10-15, затем стопами пройдись влево и вправо. Чувствуй растяжение в спине и шее. Согни колени, полежи секунд 5 и снова выйди в березку. Из березки медленно опускай спину и ноги, позвонок за позвонком."
      />
      <SecretItem isShown={count >= 12}>
        <Text style={styles.text}>Как же ты хорош! *обнимает*</Text>
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
