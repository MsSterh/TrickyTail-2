import { atom } from "jotai";
import dayjs from "dayjs";

import { DateFormat } from '@/constants/Formats';

export const selectedDate = atom<string>(dayjs().format(DateFormat.full));
