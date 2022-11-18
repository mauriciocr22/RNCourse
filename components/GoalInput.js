import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.goalImage}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholderTextColor={"#7c7c8a"}
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.inputButton}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.inputButton}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: "#121214",
  },
  textInput: {
    backgroundColor: "#202024",
    width: "100%",
    marginRight: 8,
    padding: 12,
    color: "white",
    borderRadius: 2,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  inputButton: {
    width: "25%",
    marginHorizontal: 8,
  },
  goalImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
