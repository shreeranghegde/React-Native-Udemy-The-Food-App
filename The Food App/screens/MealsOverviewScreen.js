import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ navigation, route }) {

  const categoryIdforMeal = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryIdforMeal) >= 0;
  });

  const categoryTitle = CATEGORIES.find((category) => {
    return category.id === categoryIdforMeal;
  }).title;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === categoryIdforMeal;
    }).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryIdforMeal, navigation]);

  return <MealsList items={displayedMeals} navigation={navigation}/>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
