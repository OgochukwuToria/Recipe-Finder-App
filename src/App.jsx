
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";
import ScrollToTopButton from "./components/ScrollToTopButton"; 
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import MealDetail from "./pages/MealDetail";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className="flex-grow-1 container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/meal/:id" element={<MealDetail />} />
          </Routes>
        </main>
        <AppFooter />
        <ScrollToTopButton /> 
      </div>
    </BrowserRouter>
  );
}
