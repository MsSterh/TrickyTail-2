import { StyleSheet, Text, View } from "react-native";

import StarEmptySvg from "./icons/StarEmptySvg";
import StarFullSvg from "./icons/StarFullSvg";

type CheckItemProps = {
  rate?: number;
  time?: string;
  text: string;
};

export default function DayDescription({
  rate = 0,
  time = "0:00",
  text,
}: CheckItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topLine}>
        <View style={styles.rate}>
          {[1, 2, 3, 4, 5].map((i) =>
            rate <= i ? <StarFullSvg /> : <StarEmptySvg />
          )}
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.description}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#DBD6EE",
    borderTopWidth: 2,
    marginHorizontal: -18,
  },
  topLine: {
    padding: 18,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "90%",
  },
  rate: {
    flexDirection: "row",
    gap: 1,
  },
  time: {
    color: "#867EA5",
    fontSize: 20,
    marginLeft: "auto",
  },
  description: {
    paddingBottom: 18,
    lineHeight: 22,
  },
});
