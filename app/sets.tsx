import { StyleSheet, ScrollView, Text, View } from "react-native";
import Button from "@/components/Button";
import AccordionItem from "@/components/AccordionItem";
import { useNavigation } from "@react-navigation/native";

export default function Modal() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.scroll}>
        <Text style={styles.text}>
          Сет — делать 3 подхода с перерывов в 30 сек.
        </Text>
        <View style={styles.container}>
          <AccordionItem title="Сет: на руки и спину (с резинкой)">
            <Text style={styles.text}>
              15 раз. Сядь на попу, ноги впереди, надень резинку на одну ногу
              (нога может быть согнута), этой же рукой возьми за другой конец
              резинки и отводи локоть вдоль тела назад.
            </Text>
            <Text style={styles.text}>
              60 сек. Руки вытяни впереди, на запястья надета резинка средней
              жесткости. Быстро и мелко разводи руки в стороны. 2 варианта:
              ладошки смотрят друг на друга и ладшки смотрят в пол.
            </Text>
            <Text style={styles.text}>
              15 раз. Руки с резинкой вытяни над головой. Поочередно опуская
              одну руку, заводя локоть за спину.
            </Text>
            <Text style={styles.text}>
              15 раз. Руки с резинкой: левая ладонь прижата под правым плечом,
              правую руку отводи назад.
            </Text>
          </AccordionItem>

          <AccordionItem title="Сет: отжимания + спина + пресс">
            <Text style={styles.text}>
              15 раз отжимания широким хватом (можно на коленях).
            </Text>
            <Text style={styles.text}>
              15 раз лежа на животе руки вверху, на выхохе подъем корпуса и
              сведение локтей к корпусу, взгляд в пол.
            </Text>
            <Text style={styles.text}>
              15 раз лежа на спине, руки вдоль тела, приподнимание прямых ног,
              затем сбивание коленей и выравнивание ног вверху, снова сгибание и
              выравнивание ног над полом.
            </Text>
            <Text style={styles.text}>
              15 раз лежа на спине, колени согнуты, на себя коги с открыванием
              поясницы и опустить поясницу и ноги, не ставя их на пол.
            </Text>
          </AccordionItem>

          <AccordionItem title="Сет: ноги + попа (с резинкой)">
            <Text style={styles.text}>
              15 раз. Стоя на четвереньках, резинка на бедрах. Левая нога прямая
              делает полукруг от положения за правой ногой через верх в левую
              диагональ и обратно.
            </Text>
            <Text style={styles.text}>
              15 раз. То же положение. Прямая левая нога поднимается в левую
              диагональ.
            </Text>
            <Text style={styles.text}>
              15 раз лежа на спине, колени согнуты, резинка на бедрах, подъем
              таза, на 16-ый раз задержать вверху и сделать 15 пружинок.
            </Text>
          </AccordionItem>

          <AccordionItem title="Сет: планка">
            <Text style={styles.text}>
              10 раз. Стоя в планке, выходи в собаку кошкой веерх (попа вверху,
              ноги, руки и спина прямые, животик в себя) и возвращайся в планку.
            </Text>
            <Text style={styles.text}>
              10 раз. Планка. Подними правую ногу вверх, опусти, затем подними и
              опусти левую ногу.
            </Text>
            <Text style={styles.text}>
              Из планки, сгиная колени, подойди правой ногой к себе, затем левой,
              затем верни правую ногу в исходное положение и левую. Сделай 8 раз,
              начиная с одной ноги, и 8 раз — с другой.
            </Text>
          </AccordionItem>

          <Button
            label="Закрыть"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  text: {
    paddingBottom: 18,
    lineHeight: 22,
  },
});
