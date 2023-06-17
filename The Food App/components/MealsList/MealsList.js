import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items, navigation }) {
  function mealItemRenderHandler(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    function pressHandlerMeal() {
      navigation.navigate("MealsDescription", {
        mealItemId: itemData.item.id,
      });
    }

    return <MealItem {...mealItemProps} onPress={pressHandlerMeal} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={mealItemRenderHandler}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
