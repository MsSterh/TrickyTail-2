import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day5() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Урааа!! Воскресенье! Мой любимый день! День танцев! Если бы я был богом,
        я бы не только запретил всем работать в этот день, но и обязал всех
        танцевать)) Дэнс-дэнс, крутим попкой)))) Ой, попки — это не сегодня.
        Сегодня у нас танцы без попок! Даже не вздумай её выпячивать! У нас
        вальс! ^_^
      </Text>
      <CheckItem
        setCount={setCount}
        text="Найди и включи какой-нибудь красивый вальс. Чтобы играл на фоне и создавал соответствующее настроение)"
      />
      <CheckItem
        setCount={setCount}
        text="Стань равно перед зеркалом. Руки в стороны. Стопы в 6-ой позиции. Макушкой тянись наверх, а копчиком вниз. Постой так, растягиваясь 15 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="В этой же позиции согни локти в рамку, вытянись. Скручивай верх (корпус) вправо, а зетем влево. Таз и ноги остаются неизменными. Ноги мягкие, можно ноги на ширине плеч. При максимальной скрутке, чувствуй растяжение в шее и как ты заканчиваешь движение макушкой. Сделай 10 медленных скруток вправо и 10 влево."
      />
      <CheckItem
        setCount={setCount}
        text="Та же позиция, сделай корпусом восьмерку. Отведи левую сторону с рукой и головой назад, через низ проводи их вперед, затем переведи голову направо и правой стороной через низ проведи вперед. Сделай таких подходов 8 раз. Затем в обратную сторону тоже 8. Чувствуй появляющуюся гибкость в корпусе. Не забывай тянуть плечи вниз, а макушку наверх."
      />
      <CheckItem
        setCount={setCount}
        text="В этой же позиции (стой ровно, руки в рамке). Сделай подготовительное движение с месте. Левая стопа на полу, сгибай левое колено и одновременно выводи правую стопу по полу вперед (чувствуй прокатывание с носка по ступне на пятку) без шага. Возвращайся в исходное положение. Сделай 10 раз на одну ногу и 10 раз на другую."
      />
      <CheckItem
        setCount={setCount}
        text="В том же положении (рамка и вытянутость) сделай шаг в сторону по полу, чувствуй как носками протираешь пол, проходи через нейтральную позицию (между ног) и заход на правую ногу. Затем подтягивай левую ногу с весом к себе (как в воде), но забирай ногу всем телом (таз, корпус и растяжение к макушке, немного корпус скручивается от ноги) + работа внутренней стороны бедра. Когда ноги вместе, ты должен быть уже на носочках и максимально растянут вверх и в стороны. Опускайся с носочков на всю стопу и повтори то же самое влево. Сделай по 10 раз в одну и другую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Маятник. В той же позиции. Движение вперед и назад. С подготовкой ноги, переносом веса, собиранием ног через силу внутренними мышцами бедра, выходом на носочки с максимальным растяжением. Не забывай копчик собрать и живот подтянуть. Сделай 10 маятников вперед и назад."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай 5 квадратов с правой ноги и 5 с левой. С позицией руки и мощным боковым продвижением, с собиранием ног, с корпусным подъемом и спуском в мягких коленях."
      />
      <CheckItem
        setCount={setCount}
        text="И немного вращений. Стань на носочки, вытянись, руки в стороны и при вращении в 1-ой позиции. Сделай несколько вращений по прямой от стены до стены. Растояние между ног не меняй. И  в другую сторону. Повтори ещё 4 раза. Следи за взглядом."
      />
      <SecretItem isShown={count >= 9}>
        <Text style={styles.text}>
          Ты такой красивый!! Такой ровненький, такой бесподобный!) Я аж
          засмотрелся на тебя… =*
        </Text>
        <Text style={styles.text}>
          Я нашёл карту и странную надпись на ней, надеюсь, ты поможешь мне с
          ней разобраться. Надпись на карте: от главного святилища сделай 4 шага
          вперед, поверни направо и сделай 1 шаг, ещё раз поверни направо и
          сделай 10 шагов, поверни налево и сделай 3 шага, ещё раз налево и
          сделай 4 шага, поверни ещё раз налево и сделай 6 шагов, поверни налево
          и пройди 3 шага, поверни направо и сделай 4 шага. Свет откроет тебе
          истину!
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
