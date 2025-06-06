import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DayDescription from "@/components/DayDescription";
import CheckItem from "@/components/CheckItem";
import SecretItem from "@/components/SecretItem";

export default function Day2() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <DayDescription rate={1} time="0:13" text="Растяжка рук и кистей" />
      <Text style={styles.text}>
        Вдыхаем-выдыхаем! Сегодня поработаем над дыханием. Знаешь как важно
        дышать в такт во всех упражнениях? Даже в танцах мы растягиваем стороны
        на вдох, а на выход собираемся. Дыхание — это волны прилива и отлива.
        Дыхание убирает зажатости и страхи. Большой глубокий вдох, большой
        полный выдох. Это и есть движение. Это секретный ингредиент, который
        делает нас естественными, живыми, гибкими.
      </Text>
      <Text style={styles.text}>
        Откуда в стандарте берёт начало движение? Из центра. Центром мы
        управляем ногами. Подаем его вперед и совершаем шаг. Но как насчёт
        позиции рук и корпуса? Откуда они начинают своё движение? Из центра?..
        Но если мы стоим на месте и нам нужно растянуться? Тут нам помогает
        дыхание. Дыханием мы растягиваем позвоночник и рамку, дыханием делаем
        шейпы, дыханием завершаем движение.
      </Text>
      <Text style={styles.text}>
        Дыхание может перевести твой танец на качественно новый уровень. Но
        ладно, давай просто порастягиваемся сегодня и займёмся руками. Но ты не
        забудь про дыхание. Попробуй его использовать в каких-то упражнениях и в
        другие дни на других упражнениях.
      </Text>
      <CheckItem
        setCount={setCount}
        text="Стань ровно перед зеркалом. Попу и животик собрал, лопатки вниз, подбородок не прижимай. Прямые руки в стороны, ладошки в кулачки, но выставь большой палец. Проверни руки, чтобы большой палец оказался внизу, а тыльная сторона ладони смотрела вперед. Медленно проворачивай руки с большим пальцем на 270 градусов. Вернись в исходное положение. Повтори 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно. Руки внизу. Правой рукой медленно сделай максимально большой круг через перед, верх и назад. Сделай так 6 раз на одну руку и потом 6 раз на другую."
      />
      <CheckItem
        setCount={setCount}
        text="Подойди боком к стене. Повтори предыдущее упражнение, чтобы рука скользила по стене."
      />
      <CheckItem
        setCount={setCount}
        text="Стань на носочки перед зеркалом. Руки вытяни вверх, плечи вниз. Вытягивай одну руку максимально вверх (можно оторвать противоположную ногу от пола), затем возвращай на место. Повтори вытяжение другой рукой. Чувствуй растяжение сбоку. Повтори 20 раз, по 10 раз на каждую руку."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно спиной к стене (или к холодильнику) (ноги, попа, голова прижаты к стене), руки согнуты в стиле «хандэ хох» и прижаты к стене. Веди руками по стене вверх до их выпрямления и возвращай на место. Сделай 20 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно, руки за головой. Вдох — раскрывай плечи и грудную клетку, выход — округляй спину, собирай локти. Сделай медленно так 10 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Сложи руки перед собой, как молящийся монах. Ладошки друг к другу. Сделай 10 нажимов вниз, чтобы растянуть запястья. Затем переверни руки от себя пальцами вниз и сделай 10 нажимов вверх."
      />
      <CheckItem
        setCount={setCount}
        text="Соедини ладони тыльной стороной, понажимай локтями вниз 10 раз, чтобы растянуть запястья."
      />
      <CheckItem
        setCount={setCount}
        text="Вытяни руки вперед. Пальцы натянуты до кончиков. Собирай ладонь в кулачок, начиная с мизинчика. Двигай руками медленно в стороны во время этого упражнения, как будто собираешь паутину пальцами. Сделай 16 раз. Потом выполни упражнение в обратном порядке тоже 16 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стань в позицию пасодобля. Правую руку вытягивай вперед, вверх в сторону, вниз по большому кругу, потом снова вперед, но уже с согнутым локтем и открытой к зрителю ладонью. Повтори 8 раз на одну и 8 раз на другую руку."
      />
      <CheckItem
        setCount={setCount}
        text="Стань в позицию пасодобля. Руки фламенко (пальцы натянуты, но средний и большой палец касаются друг друга). В таком положении вращай кистями в одну сторону и в другую по максимальной амплитуде. Сделай 10 вращений."
      />
      <CheckItem
        setCount={setCount}
        text="В позиции тореодора (одна нога впереди согнутая, вторая сзади прямая), сделай 8 раз руками вывод их вперед с открытой ладонью, затем в стороны (ладонь от себя аля  открываем двери лифта с напряжением) и собираем в районе груди-живота две руки вместе ладонями вверх и делаем снова укол. Повторить 8 раз на другую ногу."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно, вес больше на передней части стопы, колени ровные. Одной рукой покажи арбуз-часы-зеркало. Повтори 16 раз. Затем другой рукой 16 раз."
      />
      <CheckItem
        setCount={setCount}
        text="Стань ровно, руки расслаблены. Замахом плеча выкинь одну руку вперед. Рука расслаблена. Выход руки происходит за счет плеча. Сделай 16 раз на одно плечо, затем 16 раз на другое."
      />
      <SecretItem isShown={count >= 14}>
        <Text style={styles.text}>
          Вау! Ты превзошёл сам себя! Я видел как ты дышал, какой ты умничка!!!)
          Мой послушный учений)
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
