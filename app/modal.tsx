import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Image } from "expo-image";
import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";

const PlaceholderImage = require("@/assets/images/fox.png");

export default function Modal() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <Text style={styles.text}>
          Привет, дружок! Скучал? Я тут ходил мимо и увидел, что давно к тебе не
          заглядывал и не крал твои подарочки)) Хи-хи-хи))) Ладно-ладно, ничего
          я у тебя не крал, немножко позаимствовал, да и только! =Р
        </Text>
        <Text style={styles.text}>
          Поиграй со мной чуток, и я скажу, где твой подарок) Но только не так,
          как в прошлый раз, 15 минут и ты всё нашёл! Так больше не пойдёт,
          теперь я тебе приготовил кое-что посложнее. Будешь играть со мной
          каждый день ^_^ минут по 30, а может и того меньше. Растянем
          удовольствие, что скажешь?))
        </Text>
        <Text style={styles.text}>
          Я знал, что ты согласишься! Поэтому приготовил тебе как это модно
          нынче называть «Advent calendar». На весь январь. Я буду давать тебе
          задания каждый день, а ты выполняй их и отмечай как сделаешь, только,
          чур, честно отмечай, не филонь! Если согласен, жмакай быстрее кнопку
          внизу, чтобы приступить к нашей первой игре!)
        </Text>
        <Button
          label="Согласен! Давай играть!"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 40,
  },
  imageContainer: {
    height: 320,
    alignItems: "center",
  },
  image: {
    width: 245,
    height: 300,
  },
  text: {
    paddingBottom: 18,
    lineHeight: 22,
  },
});
