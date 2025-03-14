import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day5() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription
        rate={3}
        time="0:13"
        text="Попа (упражнения с резинкой)."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми резинку средней жесткости и надень на щиколотки. Сделай шаг вправо с присядом. Затем влево с присядом. Повтори упражнение 20 раз (по 10 на каждую ногу)."
      />
      <CheckItem
        setCount={setCount}
        text="С резинкой на щиколотках стань ровно, попу подтяни, животик в себя, колени мягкие. Можешь придерживать рукой за стол для равновесия. Стоя на одной ноге, вторую ногу уводи в сторону до растяжения резинки и возвращай. Сделай 30 раз в среднем темпе. Поменяй ногу и повтори упражнение."
      />
      <CheckItem
        setCount={setCount}
        text="То же самое упражнение, но отводи ногу назад. Сделай по 30 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="То же самое упражнение, но отводи ногу вперед. Сделай по 30 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Подними резинку на бедра, чуть выше коленей. Исходное положение — стой ровно, ноги на ширине плеч. Руки в боки. Правую ногу отводи назад по диагонали налево (под 45 градусов) за левую ногу и присядь(углы в коленях по 90 градусов), в этом же положении затем смести правду ногу назад и подприсядь (ты же итак сидишь), затем смести правую ногу по диагонали и снова присядь. Вернись в исходное положение. Сделай 10 приседаний на однй ногу, затем 20 на другую."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми коврик. Резинка там же, выше бедер. Стань на четвереньки. Отводи ногу в сторону. Сделай по 20 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Опусти резинку на щиколотки. Вытяни одноу ногу ровную и поднимай ее ровную наверх 20 раз. Повтори на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении отводи ровную ногу вправо, параллельно полу 20 раз. Повтори на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на спину на коврик, резинка чуть выше коленей. Согни ноги, стопы вместе, плечи и голова — на полу. На 1 — поднимай таз, колени вместе, 2 - разводи колени в стороны, 3 - своди колени снова вместе, 4 — положи попу на коврик. Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми валентина и прокатай мышцы ноги и попы. Прокатай задние мышцы бедра, передние и боковые."
      />
      <SecretItem isShown={count >= 10}>
        <Text style={styles.text}>Вау, какая красивая теперь попа!</Text>
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
