import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day10() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Я сегодня в ударе! Хочу делать всё! Давай-давай, вставай скорее,
        упражнения сами себя не сделают. Хочу и спинку подкачать, и пресс, и
        растянуться немножко)) айда!
      </Text>
      <CheckItem
        setCount={setCount}
        text="Ляг на коврик. Ноги согни под 90 градусов (попа и колени). Руки подними вверх, отрывай плечи и тянись руками вверх в темпе. Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Поставь стопы на пол, скручивайся, тянись правой рукой к левой пятке, отрывая корпус, затем на весу левой рукой к правой пятке. Делай в темпе 20 раз (по 10 в каждую сторону)."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг ровно на спину. Подними обе ноги вверх, отрывай попу от пола 20 раз. Ноги остаются ровными вверх. Руки вдоль тела для баланса."
      />
      <CheckItem
        setCount={setCount}
        text="Оставайся в этом же положении (на спине, руки вдоль тела и ноги равные вверх), поочередно опускай одну ногу к полу, затем вторую. Сделай 20 раз (по 10 на каждую ногу)."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу и согни ноги, спина ровная. Опуская оба колена поочередно в одну, потом в другую сторону. По 10 раз в каждую."
      />
      <CheckItem
        setCount={setCount}
        text="Сидя на попе, ноги ровные впереди, пройдись вперед и назад по коврику, рабой активно руками и спиной. Сделай туда и сюда по 5 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на спину, согни колени, постарайся руками схватиться на щиколотки (не обязательно). Поднимай таз 10 раз, каждый раз задерживая его на верху на 2 секунды."
      />
      <CheckItem
        setCount={setCount}
        text="Лодочка. Перевернись на живот, руки вытяни вверх, оторви руки и ноги, досчитай медленно до 5 и опустись. Повтори ещё 2 раза."
      />
      <CheckItem
        setCount={setCount}
        text="Лодочка поплыла. То же самое положение, но руки и ноги качаются в воздухе, когда в воздухе."
      />
      <CheckItem
        setCount={setCount}
        text="То же исходное положение. Руки вверху. Приподнимай корпус и заводи руки к себе, сгибая в локтях, активно своди лопатки. Опустись. Сделай 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Лежа на животе, возьмись руками за щиколотки и вытяни ноги вверх в колечко. Покатайся на животе в таком положении вперед и назад по 6 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стань на колени, руками коснись пяток сзади, голову вытяни вверх и вперед, но не запрокидывай. Таз вперед. Постой так 5 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Стань на колени, ладони на полу. Округли спину и задержись так на 10 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="На четвереньках, локти ровные, сделай 5 круговых движений корпусом в одну и 5 раз в другую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="То же положение 5 круговых движений корпусом вдоль тела и 5 в обратную сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на ноги, корпус вперед, руки вытяни вперед и растягивай спину 10 секунд. Пальчиками стремись вперед пройтись еще чуть-чуть."
      />
      <SecretItem isShown={count >= 16}>
        <Text style={styles.text}>
          Какой же ты классный! Всё сделал!)) *прыгает от радости*
        </Text>
        <Text style={styles.textLine}>За это вот тебе подсказка:</Text>
        <Text style={styles.textLine}>Где спать начертано людЯм,</Text>
        <Text style={styles.textLine}>Я спрячу свой секретик там, </Text>
        <Text style={styles.textLine}>Чтоб не раздавлен был (а вдруг?)</Text>
        <Text style={styles.textLine}>Внизу найду ему приют.</Text>
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
