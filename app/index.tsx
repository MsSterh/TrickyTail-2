import { useState, useEffect, useRef } from "react";
import { AppState, StyleSheet, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs, { Dayjs } from "dayjs";

import Calendar from "@/components/Calendar";
import DaySelector from "@/components/DaySelector";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const day: string = dayjs(selectedDate).format("DD");

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
          <DaySelector day={day} />
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
