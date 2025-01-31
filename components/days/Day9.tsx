import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day9() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textLine}>*потягивается*</Text>
      <Text style={styles.text}>
        Что-то не хочу ничего сегодня делать. Может просто поваляемся на
        диване?.. Ась? Я укушу тебя за ушко… Не хочешь? Ну что ж, тогда давай
        заниматься. Но так лениво… Придумал, будем растягиваться, скручиваться и
        гибкостить)))) и пускать друг другу волны признательности)))) хехехе))
      </Text>
      <CheckItem
        setCount={setCount}
        text="Сделай суставную гимнастику: вращай кистями рук по 10 раз в одну и 10 раз в другую сторону, затем локтевой сустав, тоже по 10 раз в каждую сторону, потом плечи вращай также по 10 раз в одну и другую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Голова вперед назад 10 раз, голова в сторону по 10 раз в каждую, полукруг головой (в сторону - вперед - в сторону, назад не запрокидывай!) по 5 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Положи голову (ушко) на плечо, придави другой рукой. Постой так 15 секунд, чувствуй растяжение боковой мышцы шеи. Повтори на другую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Вращай грудным отделом по часовой 10 раз и против часовой 10 раз стрелки."
      />
      <CheckItem
        setCount={setCount}
        text="Руки на пояс. Вращай тазом по часово и против по 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Вращение коленей в одну и другую сторону по 8 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Вращай стопы по очереди по 5 раз в одну и 5 раз в другую сторону."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно подай грудь вперед, затем максимально скругли спину. Повтори 8 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно плечами делай круг снизу назад, потом наверх и вперед. И в обратную сторону. Повтори 8 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сделай 10 раз волну в руках в одну сторону и 10 раз в другую. Как делать волну: стань прямо, ноги на ширине плеч, руки в стороны, смотри на себя в зеркале, согни кисть правой руки, затем локоть правой руки, потом правое плечо подними, грудь вперед, затем плечо левой руки, левый локоть, левая кисть. Когда что-то одно поднимаешь, остальное возвращается в исходное положение. Постарайся добиться изоляции."
      />
      <CheckItem
        setCount={setCount}
        text="Стоя ровно, руки в стороны. Наклонись вправо и потянись левой рукой за головой, стой так 15 секунд. Затем повтори влево. Повтори упражнение еще 1 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Возьми коврик и кубики. Стань в полушпагат. Раскачивайся 10 раз на одну и 10 на другую ногу. Задняя нога ровная на носке, передняя согнутая в колене, руки на кубиках по бокам. Выравнивай переднюю ногу и наклоняйся к ней, затем сгибай и приседай на мышцах задней ноги. Каждый раз делай на выдохе и в темпе!"
      />
      <CheckItem
        setCount={setCount}
        text="Вытянись в горочку (буквой Л) и постой так 10 секунд."
      />
      <CheckItem
        setCount={setCount}
        text="Поставь ноги шире плеч. Наклонись к одной ноге, обхвати ее руками, повиси 15 секунд, затем то же самое с другой ногой."
      />
      <CheckItem
        setCount={setCount}
        text="В том же положении покачайся и постарайся достать руками пол. Задержись 15 сек, обхватив руками ноги изнутри."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь в полушпагат, заднюю ногу положи на носок и согни в колене, возьмись за этот носок противоположной рукой, чувствуй растяжение передней мышцы бедра. Посиди в таком положении 15 секунд. И смени ногу + 15 сек."
      />
      <CheckItem
        setCount={setCount}
        text="Сядь на попу, ноги ровные впереди. Пораскачивайся активно вперед на выдох и руками старайся достать носков, на вдох выпрямляйся и своди лопатки. Повтори 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении разведи ноги под 120 градусов. Наклоняйся с правой ноге, затем посредине, к левой и посрединке. Повтори 8 раз."
      />
      <CheckItem
        setCount={setCount}
        text="В этом же положении сделай полукруг от одной ноги к другой и обратно, старайся касаться животиком пола. Повтори 8 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Ляг на спину, ноги вытянуты, руки в стороны. Скрутись, положив колено правой ноги влево, касаясь пола, головой смотри вправо. Старайся не открывать плечи. Выдыхай и лежи так 15 секунд, затем смени сторону."
      />
      <SecretItem isShown={count >= 20}>
        <Text style={styles.text}>
          Ну вот, ты теперь стал почти как я)) *потягивется* Такой же гибкий и
          пластичный!)
        </Text>
        <Text style={styles.textLine}>Дарю тебе этот стишок:</Text>
        <Text style={styles.textLine}>Совершая утренний туалет,</Text>
        <Text style={styles.textLine}>
          С помощью гибкости найдёшь ты ответ,
        </Text>
        <Text style={styles.textLine}>Вверх потянись своей левой рукой,</Text>
        <Text style={styles.textLine}>Чтобы достать подарочек свой.</Text>
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
