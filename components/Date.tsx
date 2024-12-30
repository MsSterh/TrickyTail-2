import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import dayjs, { Dayjs } from "dayjs";

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

const Date = ({ date, onSelectDate, selected }) => {
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const day = getDay(dayjs(date).format("d"));
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = dayjs(date).format("D");

  // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
  const fullDate = dayjs(date).format("YYYY-MM-DD");
  const isBefore = dayjs().isBefore(dayjs(date));

  return (
    <TouchableOpacity
      onPress={() => !isBefore && onSelectDate(fullDate)}
      style={[
        styles.card,
        selected === fullDate && { backgroundColor: "#867EA5" },
      ]}
    >
      <Text
        style={[
          styles.day,
          selected === fullDate && { color: "#DBD6EE" },
          isBefore && { color: "#BCBAC8" },
        ]}
      >
        {day}
      </Text>
      <Text
        style={[
          styles.date,
          selected === fullDate && {
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
    width: 40,
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
