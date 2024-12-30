import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import dayjs, { Dayjs } from "dayjs";
import Date from "./Date";

const Calendar = ({ onSelectDate, selected }) => {
  const [dates, setDates] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMonth, setCurrentMonth] = useState();

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 31; i++) {
      // const date = dayjs("2025-01-01").add(i, "days");
      const date = dayjs("2024-12-29").add(i, "days");
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
    onSelectDate(dayjs().format("YYYY-MM-DD"));
  }, []);

  return (
    <>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            {dates.map((date, index) => (
              <Date
                key={index}
                date={date}
                onSelectDate={onSelectDate}
                selected={selected}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  dateSection: {
    width: "100%",
    paddingVertical: 16,
  },
  scroll: {
    height: 65,
  },
  scrollView: {
    paddingLeft: 4,
  },
});
