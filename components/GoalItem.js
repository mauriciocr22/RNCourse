import { StyleSheet, View, Text, Pressable } from "react-native";

export function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#555555" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} // ripple on iOS
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 2,
    backgroundColor: "gray",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
  },
});
