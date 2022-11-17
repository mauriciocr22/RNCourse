import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(event) {
    setEnteredGoalText(event);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor={"#7c7c8a"}
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#202024",
  },
  textInput: {
    backgroundColor: "#202024",
    width: "70%",
    marginRight: 8,
    padding: 8,
    color: "white",
    borderRadius: 2,
  },
});
