import dayjs, { Dayjs } from "dayjs";

var isoWeek = require("dayjs/plugin/isoWeek");
// import isoWeek from 'dayjs/plugin/isoWeek' // ES 2015

dayjs.extend(isoWeek);

// return number from 1 to 52
export const getWeek = (date: string) => dayjs(date).isoWeek()

// return number from 1 to 7
export const getWeekDay = (date: string) => dayjs(date).isoWeekday()
