import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs, { Dayjs } from "dayjs";

import Calendar from "@/components/Calendar";
import Day1 from "@/components/Day1";
import Day2 from "@/components/Day2";
import DayNotFound from "@/components/DayNotFound";

const ComponentList = {
  "0": DayNotFound,
  "01": Day1,
  "02": Day2,
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("modal");
    }, 0);
  }, []);

  const day: string = dayjs(selectedDate).format("DD");

  const SpecificDay =
    ComponentList[ComponentList.hasOwnProperty(day) ? day : "0"];

  return (
    <>
      <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
      <ScrollView>
        <View style={styles.container}>
          <SpecificDay />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
});
