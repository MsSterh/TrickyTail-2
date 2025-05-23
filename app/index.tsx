import { Fragment, useState, useEffect, useRef } from "react";
import { AppState, StyleSheet, ScrollView, View } from "react-native";
import { useAtomValue } from "jotai";

import Calendar from "@/components/Calendar";
import DaySelector from "@/components/DaySelector";

import { selectedDate } from "@/state/atoms";

export default function Home() {
  const currentDate = useAtomValue(selectedDate);
  const scrollViewRef = useRef<ScrollView>(null);

  const appState = useRef(AppState.currentState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, [currentDate]);

  return (
    <Fragment>
      <Calendar isActive={isActive} setActive={setActive} />
      <ScrollView ref={scrollViewRef}>
        <View style={styles.container}>
          <DaySelector date={currentDate} />
        </View>
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
});
