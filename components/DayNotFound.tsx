import { StyleSheet, Text, View } from "react-native";

export default function DayNotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Какой неожиданный поворот событий. Тут ничего нет... Даже не представляю
        как как могло случиться. Хм...
      </Text>
      <Text style={styles.text}>Кажется, это какое-то другое измерение...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 18,
  },
  text: {
    paddingBottom: 18,
    lineHeight: 22,
  },
});
