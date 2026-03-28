# Recipe Finder Web Application

A modern and multilingual Recipe Finder web application built with React.js, React Bootstrap, and TheMealDB API.

Developed by **Victoria Elochukwu** as part of the **UEF Web Programming FinalProject (2025)**.

The app allows users to search for recipes by name, browse by category or region, view full details of each meal, and manage their favorite recipes. It includes multilingual support (English, Finnish, Swedish), a dark mode toggle, automatic random recipe display, a dynamic hero section with transitions, and a scroll-to-top button.

---

## Features
- Search recipes by name, category, or region  
- View full recipe details (ingredients, instructions, image)  
- Add or remove recipes from favorites (saved in localStorage)  
- Multilingual interface: English, Finnish, Swedish  
- Responsive design using React Bootstrap  
- Dark Mode toggle with saved user preference  
- Scroll-to-Top button when scrolling down  
- Dynamic hero section with rotating background images  
- Random recipes shown at the bottom of the homepage instead of a footer  

---

## Tech Stack
Frontend: React.js (Vite)  
Styling: React Bootstrap, Bootstrap 5  
API: TheMealDB API  
Internationalization: react-i18next and i18next  
Icons: Lucide React  
State Management: React Hooks (useState, useEffect)  
Package Manager: npm  


---

## How to Run the Application

1. **Extract the ZIP file**  
   After downloading the project ZIP file, extract it to a folder 

2. **Open in VS Code**  
   Open the extracted folder in Visual Studio Code or any preferred code editor.

3. **Install dependencies**  
   Make sure you have Node.js and npm installed. In the terminal, run: npm install, npm run dev
VITE v5.x.x ready in 300ms
Local: http://localhost:5173/

4. Open your browser and go to **http://localhost:5173/** to view the app.

---

## How to Use

- Use the **search bar** to find recipes (e.g., “chicken”).  
- Click a recipe to view full instructions and ingredients.  
- Add to **Favorites** by clicking the heart icon (persists locally).  
- Change the interface language using **EN / FI / SV** in the navbar.  
- Toggle **Dark Mode** using the button in the navbar.  
- Use the **Scroll-to-Top** button to quickly return to the top of the page.  
- Explore **Random Recipes** at the bottom of the homepage.  

---

## API Reference

All recipe data is fetched from [TheMealDB API](https://www.themealdb.com/api.php).

**Endpoints used:**
- Search meals by name: `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
- Filter by category: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
- Lookup by meal ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
- Get a random meal: `https://www.themealdb.com/api/json/v1/1/random.php`

---

## Responsive Design

This app is fully responsive and optimized for:
- Desktop browsers  
- Tablets  
- Mobile devices  

It uses Bootstrap’s grid and responsive utilities to automatically adapt layouts.

---

## Developer Notes

- Built with React + Vite for fast reload and optimized builds.  
- Translations powered by react-i18next.  
- Favorites persist using localStorage.  
- Random recipes load dynamically on each visit.  
- Dark Mode and Scroll-to-Top work across all pages.  

