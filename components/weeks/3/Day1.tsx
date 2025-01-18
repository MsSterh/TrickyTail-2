import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day1() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Попа-ноги-пресс-спина-растяжка.
      </Text>
      <CheckItem
        setCount={setCount}
        text="Стань ровно. Сделай шаг вперед и присядь. Вернись в исходной положение. Сделай 20 приседаний, по 10 на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай присяд, на вставании одна нога поднимается в сторону на весу. Сделай 20 приседаний, по 10 на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя на одной ноге, вторую поднимай не быстро вперед, собрали, в сторону, собрали, назад, собрали. Сделать по 16 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Стань в планку на прямых руках. Выводи правую руку вперед по полу и левую ногу назад по полу, верни на место. Повтори другой рукой. Сделай 20 раз на каждую руку, чередуй их."
      />
      <CheckItem
        setCount={setCount}
        text="Боковая планка по 20 секунд на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на живот на коврик. Руки за головой. Поднимай торс и ноги одновременно. Сделай два подхода по 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стой ровно. Вращения корпусом влево-вправо с рукой, как будто удары в сторону противоположной рукой. 30 быстрых раз, по 15 в каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя лицом к спинке дивана, положить ногу на нее. Обе ноги ровные. 10 наклонов к ноге с прямой спиной, на 10-ый раз задержись и досчитай медленно до 10. Затем развернись боком к спинке дивана (нога продолжает лежать там же), сделай 10 наклонов вниз к ноге и на 10-ый раз медленно считай до 10. В этом положении сделай 10 боковых наклонов к ноге на диване. Руку вытягивай, чтобы тянулся бочок. На 10-ый раз задержись, медленно считая до 10. Повтори все то же самое на другую ногу."
      />
      <SecretItem isShown={count >= 9}>
        <Text style={styles.text}>
          Ну ты даёшь! Всё выполнил и ни разу не пожаловался! Красавец!!
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
