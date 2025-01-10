import { useState, useEffect, useRef } from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
import dayjs, { Dayjs } from "dayjs";
import Date from "./Date";

const Calendar = ({ onSelectDate, selected, isActive, setActive }) => {
  const scrollRef = useRef(null);
  const [dates, setDates] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentDay, setCurrentDay] = useState();

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 31; i++) {
      const date = dayjs("2025-01-01").add(i, "days");
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    setActive(false);
    getDates();
    onSelectDate(dayjs().format("YYYY-MM-DD"));
  }, [isActive]);

  useEffect(() => {
    setTimeout(() => {
      const windowWidth = Dimensions.get("window").width;
      const dayPx = (dayjs().get("date") - 1) * 52;
      const x = dayPx - windowWidth / 2 + 26;

      scrollRef.current?.scrollTo({
        x: x,
        y: 0,
        animated: true,
      });
    }, 0);
  }, [scrollRef.current]);

  return (
    <>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
            ref={scrollRef}
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
