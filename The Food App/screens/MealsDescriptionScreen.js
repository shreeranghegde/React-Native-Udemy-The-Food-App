import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDescription from "../components/MealDescription";
import Subtitle from "../components/MealDescriptiom/Subtitle";
import List from "../components/MealDescriptiom/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealsDescriptionScreen({ route, navigation }) {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  const mealId = route.params.mealItemId;
  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  // const isMealFavorite = favoriteMealsContext.ids.includes(mealId);
  const isMealFavorite = favoriteMealIds.includes(mealId);
  
  function onFavoritesHandler () {
    if (isMealFavorite) {
      // favoriteMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({id:  mealId})); 
    } else {
      // favoriteMealsContext.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }   
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={isMealFavorite ? "star" : "star-outline"} color="white" onPress={onFavoritesHandler} />
      }
    })
  }, [navigation, onFavoritesHandler]);

  return (
    <ScrollView style={styles.scrollContainer}>
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDescription
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.descriptionText}
      />

      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

export default MealsDescriptionScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  descriptionText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  outerListContainer: {
    alignItems: 'center',
    width: '100%',
  },
  scrollContainer: {
    marginBottom: 32,
  }
});
