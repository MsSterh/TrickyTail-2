import { StyleSheet, Text, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import { useSetAtom } from "jotai";

import { selectedDate } from "@/state/atoms";

const getDay = (date: string) => {
  switch (date) {
    case "1":
      return "пнд";
    case "2":
      return "втр";
    case "3":
      return "срд";
    case "4":
      return "чтв";
    case "5":
      return "птн";
    case "6":
      return "сбт";
    case "0":
      return "вск";
    default:
      "вск";
  }
};

type DateProps = {
  date: string;
  selected: string | null;
};

const Date = ({ date, selected }: DateProps) => {
  const setCurrentDate = useSetAtom(selectedDate);

  // get the dayweek text e.g пнд, втр, срд...
  const day = getDay(dayjs(date).format("d"));
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = dayjs(date).format("D");

  const isBefore = dayjs().isBefore(dayjs(date));

  return (
    <TouchableOpacity
      onPress={() => !isBefore && setCurrentDate(date)}
      style={[
        styles.card,
        selected === date && !isBefore && { backgroundColor: "#867EA5" },
      ]}
    >
      <Text
        style={[
          styles.day,
          selected === date && { color: "#DBD6EE" },
          isBefore && { color: "#BCBAC8" },
        ]}
      >
        {day}
      </Text>
      <Text
        style={[
          styles.date,
          selected === date && {
            color: "#fff",
          },
          isBefore && { color: "#94929E" },
        ]}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default Date;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    alignItems: "center",
    height: 65,
    width: 42,
    marginHorizontal: 5,
  },
  day: {
    color: "#94929E",
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  date: {
    color: "#000",
    fontSize: 20,
  },
});
