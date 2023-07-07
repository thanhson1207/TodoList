import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(probs) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={probs.onDeleteGoalItem.bind(this, probs.id)}
      >
        <Text style={styles.goalText}>{probs.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    marginTop: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 10,
    color: "#fff",
  },
});
