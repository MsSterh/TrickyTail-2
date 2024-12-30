import { Link } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("modal");
    }, 0);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Link href="/modal" style={styles.link}>
          Open modal
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
});
