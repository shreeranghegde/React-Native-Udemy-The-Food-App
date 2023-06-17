import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavoriteMealId(id) {
    setFavoriteMealIds((currentFavoriteIds) => [...currentFavoriteIds, id]);
  }

  function removeFavoriteMealId(id) {
    setFavoriteMealIds((currentFavoriteIds) =>
      currentFavoriteIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavoriteMealId,
    removeFavorite: removeFavoriteMealId,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
