import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataItem) => (
    <View key={dataItem} style={styles.listItem}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    padding: 8,
    margin: 8,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
