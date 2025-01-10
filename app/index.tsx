import { useState, useEffect, useRef } from "react";
import { AppState, StyleSheet, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs, { Dayjs } from "dayjs";

import Calendar from "@/components/Calendar";
import Day1 from "@/components/days/Day1";
import Day2 from "@/components/days/Day2";
import Day3 from "@/components/days/Day3";
import Day4 from "@/components/days/Day4";
import Day5 from "@/components/days/Day5";
import Day6 from "@/components/days/Day6";
import Day7 from "@/components/days/Day7";
import Day8 from "@/components/days/Day8";
import Day9 from "@/components/days/Day9";
import Day10 from "@/components/days/Day10";
import Day11 from "@/components/days/Day11";
import Day12 from "@/components/days/Day12";
import Day13 from "@/components/days/Day13";
import Day14 from "@/components/days/Day14";
import Day15 from "@/components/days/Day15";
import Day16 from "@/components/days/Day16";
import Day17 from "@/components/days/Day17";
import Day18 from "@/components/days/Day18";
import Day19 from "@/components/days/Day19";
import Day20 from "@/components/days/Day20";
import Day21 from "@/components/days/Day21";
import Day22 from "@/components/days/Day22";
import Day23 from "@/components/days/Day23";
import Day24 from "@/components/days/Day24";
import Day25 from "@/components/days/Day25";
import Day26 from "@/components/days/Day26";
import Day27 from "@/components/days/Day27";
import Day28 from "@/components/days/Day28";
import Day29 from "@/components/days/Day29";
import Day30 from "@/components/days/Day30";
import Day31 from "@/components/days/Day31";
import DayNotFound from "@/components/DayNotFound";

const ComponentList = {
  "0": DayNotFound,
  "01": Day1,
  "02": Day2,
  "03": Day3,
  "04": Day4,
  "05": Day5,
  "06": Day6,
  "07": Day7,
  "08": Day8,
  "09": Day9,
  "10": Day10,
  "11": Day11,
  "12": Day12,
  "13": Day13,
  "14": Day14,
  "15": Day15,
  "16": Day16,
  "17": Day17,
  "18": Day18,
  "19": Day19,
  "20": Day20,
  "21": Day21,
  "22": Day22,
  "23": Day23,
  "24": Day24,
  "25": Day25,
  "26": Day26,
  "27": Day27,
  "28": Day28,
  "29": Day29,
  "30": Day30,
  "31": Day31,
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const day: string = dayjs(selectedDate).format("DD");

  const SpecificDay =
    ComponentList[ComponentList.hasOwnProperty(day) ? day : "0"];

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        setActive(true);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  scrollViewRef.current?.scrollTo({ y: 0, animated: true });

  return (
    <>
      <Calendar
        onSelectDate={setSelectedDate}
        selected={selectedDate}
        isActive={isActive}
        setActive={setActive}
      />
      <ScrollView ref={scrollViewRef}>
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
