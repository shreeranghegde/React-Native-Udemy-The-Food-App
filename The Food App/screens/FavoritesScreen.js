import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen({ route, navigation }) {
  //   const favoritedMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  // favoritedMealsContext.ids.includes(meal.id)
  const favoriteMealsSelected = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMealsSelected.length == 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMealsSelected} navigation={navigation} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
