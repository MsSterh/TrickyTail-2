import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Calendar from "@/components/Calendar";
import Day1 from "@/components/Day1";

export default function Home() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("modal");
    }, 0);
  }, []);

  return (
    <>
      <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
      <ScrollView>
        <View style={styles.container}>
          <Day1 />
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
