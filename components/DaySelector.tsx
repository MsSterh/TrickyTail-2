import React from "react";
import dayjs from "dayjs";

import { DateFormat } from "@/constants/Formats";
import { getWeek, getWeekDay } from "@/utils/date";

import Day250101 from "@/components/25/01/Day1";
import Day250102 from "@/components/25/01/Day2";
import Day250103 from "@/components/25/01/Day3";
import Day250104 from "@/components/25/01/Day4";
import Day250105 from "@/components/25/01/Day5";
import Day250106 from "@/components/25/01/Day6";
import Day250107 from "@/components/25/01/Day7";
import Day250108 from "@/components/25/01/Day8";
import Day250109 from "@/components/25/01/Day9";
import Day250110 from "@/components/25/01/Day10";
import Day250111 from "@/components/25/01/Day11";
import Day250112 from "@/components/25/01/Day12";
import Day250113 from "@/components/25/01/Day13";
import Day250114 from "@/components/25/01/Day14";
import Day250115 from "@/components/25/01/Day15";
import Day250116 from "@/components/25/01/Day16";
import Day250117 from "@/components/25/01/Day17";
import Day250118 from "@/components/25/01/Day18";
import Day250119 from "@/components/25/01/Day19";
import Day250120 from "@/components/25/01/Day20";
import Day250121 from "@/components/25/01/Day21";
import Day250122 from "@/components/25/01/Day22";
import Day250123 from "@/components/25/01/Day23";
import Day250124 from "@/components/25/01/Day24";
import Day250125 from "@/components/25/01/Day25";
import Day250126 from "@/components/25/01/Day26";
import Day250127 from "@/components/25/01/Day27";
import Day250128 from "@/components/25/01/Day28";
import Day250129 from "@/components/25/01/Day29";
import Day250130 from "@/components/25/01/Day30";
import Day250131 from "@/components/25/01/Day31";

import Day11 from "@/components/weeks/1/Day1";
import Day12 from "@/components/weeks/1/Day2";
import Day13 from "@/components/weeks/1/Day3";
import Day14 from "@/components/weeks/1/Day4";
import Day15 from "@/components/weeks/1/Day5";
import Day16 from "@/components/weeks/1/Day6";
import Day17 from "@/components/weeks/1/Day7";

import Day21 from "@/components/weeks/2/Day1";
import Day22 from "@/components/weeks/2/Day2";
import Day23 from "@/components/weeks/2/Day3";
import Day24 from "@/components/weeks/2/Day4";
import Day25 from "@/components/weeks/2/Day5";
import Day26 from "@/components/weeks/2/Day6";
import Day27 from "@/components/weeks/2/Day7";

import Day31 from "@/components/weeks/3/Day1";
import Day32 from "@/components/weeks/3/Day2";
import Day33 from "@/components/weeks/3/Day3";
import Day34 from "@/components/weeks/3/Day4";
import Day35 from "@/components/weeks/3/Day5";
import Day36 from "@/components/weeks/3/Day6";
import Day37 from "@/components/weeks/3/Day7";

import Day41 from "@/components/weeks/4/Day1";
import Day42 from "@/components/weeks/4/Day2";
import Day43 from "@/components/weeks/4/Day3";
import Day44 from "@/components/weeks/4/Day4";
import Day45 from "@/components/weeks/4/Day5";
import Day46 from "@/components/weeks/4/Day6";
import Day47 from "@/components/weeks/4/Day7";

import Day51 from "@/components/weeks/5/Day1";
import Day52 from "@/components/weeks/5/Day2";
import Day53 from "@/components/weeks/5/Day3";
import Day54 from "@/components/weeks/5/Day4";
import Day55 from "@/components/weeks/5/Day5";
import Day56 from "@/components/weeks/5/Day6";
import Day57 from "@/components/weeks/5/Day7";

import DayNotFound from "@/components/DayNotFound";

type FirstMonthComponentListType = {
  [year: string]: {
    [month: string]: {
      [day: string]: () => React.JSX.Element;
    };
  };
};

const FirstMonthComponentList: FirstMonthComponentListType = {
  "25": {
    "01": {
      "01": Day250101,
      "02": Day250102,
      "03": Day250103,
      "04": Day250104,
      "05": Day250105,
      "06": Day250106,
      "07": Day250107,
      "08": Day250108,
      "09": Day250109,
      "10": Day250110,
      "11": Day250111,
      "12": Day250112,
      "13": Day250113,
      "14": Day250114,
      "15": Day250115,
      "16": Day250116,
      "17": Day250117,
      "18": Day250118,
      "19": Day250119,
      "20": Day250120,
      "21": Day250121,
      "22": Day250122,
      "23": Day250123,
      "24": Day250124,
      "25": Day250125,
      "26": Day250126,
      "27": Day250127,
      "28": Day250128,
      "29": Day250129,
      "30": Day250130,
      "31": Day250131,
    },
  },
};

type WeeklyDayComponentListType = {
  [week: string]: {
    [day: string]: () => React.JSX.Element;
  };
};

const WeeklyDayComponentList: WeeklyDayComponentListType = {
  "1": {
    "1": Day11,
    "2": Day12,
    "3": Day13,
    "4": Day14,
    "5": Day15,
    "6": Day16,
    "7": Day17,
  },
  "2": {
    "1": Day21,
    "2": Day22,
    "3": Day23,
    "4": Day24,
    "5": Day25,
    "6": Day26,
    "7": Day27,
  },
  "3": {
    "1": Day31,
    "2": Day32,
    "3": Day33,
    "4": Day34,
    "5": Day35,
    "6": Day36,
    "7": Day37,
  },
  "4": {
    "1": Day41,
    "2": Day42,
    "3": Day43,
    "4": Day44,
    "5": Day45,
    "6": Day46,
    "7": Day47,
  },
  "5": {
    "1": Day51,
    "2": Day52,
    "3": Day53,
    "4": Day54,
    "5": Day55,
    "6": Day56,
    "7": Day57,
  },
};

type DaySelectorProps = {
  date: string;
};

const DaySelector = ({ date }: DaySelectorProps) => {
  const isFirst = dayjs(date).format(DateFormat.short) === "01/25";
  const week: string = ((getWeek(date) % 5) + 1).toString(); // 1-5
  const day: string = getWeekDay(date).toString(); // 1-7

  const isBefore = dayjs().isBefore(dayjs(date));

  const SpecificDay = isFirst
    ? FirstMonthComponentList["25"]["01"][dayjs(date).format("DD")]
    : WeeklyDayComponentList[week].hasOwnProperty(day) && !isBefore
    ? WeeklyDayComponentList[week][day]
    : DayNotFound;

  return <SpecificDay />;
};

export default DaySelector;
