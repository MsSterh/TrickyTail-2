import { useAtomValue } from "jotai";

import { selectedMonth } from "@/state/atoms";

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

import Day250201 from "@/components/25/02/Day1";
import Day250202 from "@/components/25/02/Day2";
import Day250203 from "@/components/25/02/Day3";
import Day250204 from "@/components/25/02/Day4";
import Day250205 from "@/components/25/02/Day5";
import Day250206 from "@/components/25/02/Day6";
import Day250207 from "@/components/25/02/Day7";

import DayNotFound from "@/components/DayNotFound";

const ComponentList = {
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
    "02": {
      "01": Day250201,
      "02": Day250202,
      "03": Day250203,
      "04": Day250204,
      "05": Day250205,
      "06": Day250206,
      "07": Day250207,
    },
  },
  "0": DayNotFound,
};

export default function DaySelector({ day = "0" }) {
  const selectedDate = useAtomValue(selectedMonth);
  const [month, year] = selectedDate?.split("/") ?? [null, null];

  const SpecificDay =
    month &&
    year &&
    ComponentList.hasOwnProperty(year) &&
    ComponentList[year].hasOwnProperty(month) &&
    ComponentList[year][month].hasOwnProperty(day)
      ? ComponentList[year][month][day]
      : ComponentList["0"];

  return <SpecificDay />;
}
