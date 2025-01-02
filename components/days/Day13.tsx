import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day13() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Оххх… опять понедельник. Опять на работу… Опять эти напряги… Хорошо, что
        я лис!)) хаха))) Мне не надо работать))) Да ещё и тырить могу всякие
        подарочки ^_^ Хорошо быть лисом! Можно даже других понапрягать) Знаешь,
        что я буду напрягать? Руки-ноги-пресс-спину и ещё порастягиваю тебя)))
        А? Пятилетка за 30 минут)))
      </Text>
      <CheckItem
        setCount={setCount}
        text="Присяд, на вставании одна нога поднимается в сторону на весу. Сделай 20 приседаний, по 10 на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя на одной ноге, вторую поднимаем не быстро вперед, собрали, в сторону, собрали, назад, собрали. Сделать по 10 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Стань в планку на прямых руках. Выводи правую руку вперед по полу и левую ногу назад по полу, верни на место. Повтори другой рукой. Сделай 10 раз на каждую руку, чередуй их."
      />
      <CheckItem
        setCount={setCount}
        text="Боковая планка по 20 секунд на каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на живот на коврик. Руки за головой. Поднимай торс и ноги одновременно. Сделай 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стой ровно. Вращения корпусом влево-вправо с рукой, как будто удары в сторону противоположной рукой. 20 быстрых раз, по 10 в каждую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя лицом к спинке дивана, положить ногу на нее. Обе ноги ровные. 10 наклонов к ноге с прямой спиной, на 10-ый раз задержись и досчитай медленно до 5. Затем развернись боком к спинке дивана (нога продолжает лежать там же), сделай 10 наклонов вниз к ноге и на 10-ый раз медленно считай до 5. В этом положении сделай 10 боковых наклонов к ноге на диване. Руку вытягивай, чтобы тянулся бочок. На 10-ый раз задержись, медленно считая до 5. Повтори все то же самое на другую ногу."
      />
      <SecretItem isShown={count >= 7}>
        <Text style={styles.text}>
          Ну ты даёшь! Всё выполнил и ни разу не пожаловался! Красавец!! Тело
          прокачали, надо бы и мозги прокачать. Как там оно было, напомни...
          шаблэм! шэйм! фрэйм! брэйд! флэйм!
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
