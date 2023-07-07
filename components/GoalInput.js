import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(probs) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    probs.onAddGoalHandler(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={probs.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/img/OIP.jpg")} />
        <TextInput
          style={styles.textInput}
          placeholder="Input your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#5a0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={probs.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    marginRight: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
