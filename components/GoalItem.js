import { StyleSheet, View, Text } from "react-native";

export function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 2,
    backgroundColor: "gray",
  },
});
