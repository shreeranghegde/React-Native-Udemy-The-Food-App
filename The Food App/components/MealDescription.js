import { View, Text, StyleSheet } from "react-native";

function MealDescription({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItems, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItems, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItems, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDescription;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItems: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
