import React, { ReactNode } from "react";
import { StyleSheet, View, Pressable, SafeAreaView, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Entypo from "@expo/vector-icons/Entypo";

const AnimatedEntypo = Animated.createAnimatedComponent(Entypo);

type AccordionItemProps = {
  children: ReactNode;
  title: string;
};

export default function AccordionItem({ children, title }: AccordionItemProps) {
  const open = useSharedValue(false);
  const onPress = () => {
    open.value = !open.value;
  };

  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(open.value), {
      duration: 200,
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  const rotateStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: withTiming(open.value ? "180deg" : "0deg", {
          duration: 200,
        }),
      },
    ],
  }));
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#DBD6EE66" : "transparent",
          },
          styles.button,
        ]}
      >
        <Text style={styles.text}>{title}</Text>
        <AnimatedEntypo
          name={"chevron-up"}
          size={24}
          color="#867EA5"
          style={rotateStyle}
        />
      </Pressable>

      <Animated.View style={[styles.animatedView, bodyStyle]}>
        <View
          onLayout={(e) => {
            height.value = e.nativeEvent.layout.height;
          }}
          style={styles.wrapper}
        >
          {children}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#DBD6EE",
    borderBottomWidth: 2,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
  },
  text: {
    fontWeight: 500,
    lineHeight: 22,
  },
  wrapper: {
    width: "100%",
    position: "absolute",
    flex: 1,
    paddingHorizontal: 18,
  },
  animatedView: {
    width: "100%",
    overflow: "hidden",
  },
});
