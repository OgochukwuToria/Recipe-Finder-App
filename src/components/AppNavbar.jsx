import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form, Button, Badge } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFavorites from "../i18n/hooks";

export default function AppNavbar() {
  const { t, i18n } = useTranslation();
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const location = useLocation();

  const [q, setQ] = useState("");

  //  Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
          🍳 {t("appTitle")}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-hover ${isActive("/") ? "nav-hover-active" : ""}`}
            >
              {t("home")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/favorites"
              className={`nav-hover ${isActive("/favorites") ? "nav-hover-active" : ""}`}
            >
              {t("favorites")}
              {favorites.length > 0 && (
                <Badge bg="warning" text="dark" className="ms-2">
                  {favorites.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form
            className="d-flex flex-grow-1 justify-content-center"
            onSubmit={handleSubmit}
            style={{ maxWidth: "500px" }}
          >
            <Form.Control
              type="search"
              placeholder={t("searchPlaceholder")}
              className="me-2 flex-grow-1"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <Button variant="warning" type="submit" className="fw-semibold">
              {t("search")}
            </Button>
          </Form>

          
          <Nav className="ms-3">
            <Nav.Link onClick={() => i18n.changeLanguage("en")}>EN</Nav.Link>
            <Nav.Link onClick={() => i18n.changeLanguage("fi")}>FI</Nav.Link>
            <Nav.Link onClick={() => i18n.changeLanguage("sv")}>SV</Nav.Link>
          </Nav>

          
          <Button
            variant={darkMode ? "light" : "dark"}
            className="ms-3"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? " Light" : " Dark"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
