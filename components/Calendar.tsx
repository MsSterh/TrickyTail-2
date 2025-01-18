import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";

import { DateFormat } from '@/constants/Formats';
import { selectedDate } from "@/state/atoms";
import Date from "./Date";

type CalendarProps = {
  onSelectDate: Dispatch<SetStateAction<string | null>>,
  selected: string | null,
  isActive: boolean,
  setActive: Dispatch<SetStateAction<boolean>>
}

const Calendar = ({ onSelectDate, selected, isActive, setActive }: CalendarProps) => {
  const scrollRef = useRef(null);
  const [dates, setDates] = useState<string[]>([]);
  const date = useAtomValue(selectedDate);

  // get dates for selected month & year, format them as strings and store them in state
  const getDates = () => {
    const stringDate = dayjs(date).format("YYYY-MM");
    const days = dayjs(stringDate).daysInMonth();

    const _dates = [];
    for (let i = 0; i < days; i++) {
      const date = dayjs(stringDate + "-01").add(i, "days").format(DateFormat.full);
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    setActive(false);
    getDates();
    onSelectDate(dayjs().format(DateFormat.full));
  }, [isActive, selectedDate]);

  useEffect(() => {
    // scroll to current date
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
  }, [scrollRef.current, selectedDate]);

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
