import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (meal) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.idMeal === meal.idMeal);
      if (exists) return prev.filter((m) => m.idMeal !== meal.idMeal);
      return [...prev, meal];
    });
  };

  const isFavorite = (idMeal) => favorites.some((m) => m.idMeal === idMeal);

  return { favorites, toggleFavorite, isFavorite };
}
