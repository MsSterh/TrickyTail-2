import { useState, useEffect, useRef } from "react";
import { AppState, StyleSheet, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs, { Dayjs } from "dayjs";

import Calendar from "@/components/Calendar";
import Day1 from "@/components/Day1";
import Day2 from "@/components/Day2";
import Day3 from "@/components/Day3";
import DayNotFound from "@/components/DayNotFound";

const ComponentList = {
  "0": DayNotFound,
  "01": Day1,
  "02": Day2,
  "03": Day3,
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();

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

  return (
    <>
      <Calendar
        onSelectDate={setSelectedDate}
        selected={selectedDate}
        isActive={isActive}
        setActive={setActive}
      />
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
