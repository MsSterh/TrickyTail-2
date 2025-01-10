import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useCallback, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import "react-native-reanimated";
import dayjs, { Dayjs } from "dayjs";
import { useAtom } from "jotai";
import MonthPicker from "react-native-month-year-picker";

import { selectedMonth } from "@/state/atoms";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "index",
};
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [month, setMonth] = useAtom(selectedMonth);
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value) => setShow(value), []);

  const onMonthChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || month;

      setMonth(dayjs(selectedDate).format("MM/YY"));
      showPicker(false);
    },
    [month, showPicker]
  );

  useEffect(() => {
    if (!month) {
      setMonth(dayjs().format("MM/YY"));
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Лисий календарь",
            contentStyle: {
              backgroundColor: Colors.light.background,
            },
            headerRight: () => <Link href="/modal">Врр!!</Link>,
            headerLeft: () => (
              <TouchableOpacity onPress={() => showPicker(true)}>
                <Text>{month}</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: Colors.light.background,
            },
          }}
        />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: true }} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      {show && (
        <MonthPicker
          onChange={onMonthChange}
          value={new Date()}
          minimumDate={new Date(2025, 1)}
          maximumDate={new Date(2025, 2)}
          locale="ru"
        />
      )}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
