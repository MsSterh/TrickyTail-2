import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day22() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Привет-привет)) Всё-то мы с тобой прокачали, а вот про попу-то, про
        попу-то забыли! Надо бороться с сидением и подкачать попные мышцы! Тебе
        для этого понадобятся резинки, возьми пачку в спортивной сумке за
        дверью.
      </Text>
      <CheckItem
        setCount={setCount}
        text="Возьми резинку средней жесткости и надень на щиколотки. Присядь и в этом положении сделай 4 шага по диагонали вперед (вправо влево диагонали), затем 4 шага по диагонали назад. Повтори 6 раз."
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
        text="Подними резинку на бедра, чуть выше коленей. Стань на четвереньки. Отводи ногу в сторону. Сделай по 20 раз на каждую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на спину на коврик, резинка чуть выше коленей. Согни ноги, плечи и голова на полу, поднимай таз и одновременно разводи колени. Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Красавчег! Самое тяжелое позади! Теперь расслабляемся: возьми валентина и прокатай мышцы ноги и попы. Прокатай задние мышцы бедра, передние и боковые."
      />
      <SecretItem isShown={count >= 6}>
        <Text style={styles.text}>
          Смотрю я на твою попу и такие стихи приходят на ум:
        </Text>
        <Text style={styles.textLine}>На праздник фонарей</Text>
        <Text style={styles.textLine}>Возьму с собой тебя,</Text>
        <Text style={styles.textLine}>Пусть светел путь мой будет</Text>
        <Text style={styles.textLine}>На гору Линшаня.</Text>
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
