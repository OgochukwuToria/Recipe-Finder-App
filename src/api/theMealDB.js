// // src/api/theMealDB.js
// import axios from "axios";

// const BASE = "https://www.themealdb.com/api/json/v1/1";

// export const searchMeals = async (query) => {
//   const res = await axios.get(`${BASE}/search.php`, { params: { s: query } });
//   return res.data.meals; // null if no results
// };

// export const lookupMealById = async (id) => {
//   const res = await axios.get(`${BASE}/lookup.php`, { params: { i: id } });
//   return res.data.meals ? res.data.meals[0] : null;
// };

// export const getRandomMeal = async () => {
//   const res = await axios.get(`${BASE}/random.php`);
//   return res.data.meals ? res.data.meals[0] : null;
// };

// export const filterByIngredient = async (ingredient) => {
//   const res = await axios.get(`${BASE}/filter.php`, { params: { i: ingredient } });
//   return res.data.meals;
// };


const BASE = "https://www.themealdb.com/api/json/v1/1";

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network error");
  return res.json();
}

export const api = {
  searchMeals: (q) => fetchJSON(`${BASE}/search.php?s=${q}`),
  lookupMeal: (id) => fetchJSON(`${BASE}/lookup.php?i=${id}`),
  listCategories: () => fetchJSON(`${BASE}/categories.php`),
  listAreas: () => fetchJSON(`${BASE}/list.php?a=list`),
  filterByCategory: (c) => fetchJSON(`${BASE}/filter.php?c=${c}`),
  filterByArea: (a) => fetchJSON(`${BASE}/filter.php?a=${a}`),
  random: () => fetchJSON(`${BASE}/random.php`),
};
