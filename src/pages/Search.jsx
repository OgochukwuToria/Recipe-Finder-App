import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { api } from "../api/theMealDB"; 
import { Loading, ErrorState } from "../components/LoadingError";
import MealCard from "../components/MealCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Search() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const category = params.get("category") || "";
  const area = params.get("area") || "";
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api.listCategories().then((c) => setCategories(c.categories || []));
    api.listAreas().then((a) => setAreas(a.meals || []));
  }, []);

  useEffect(() => {
    async function load() {
      try {
        setError(false);
        setLoading(true);
        let data;
        if (category) data = await api.filterByCategory(category);
        else if (area) data = await api.filterByArea(area);
        else data = await api.searchMeals(q);
        setMeals(data.meals || []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [q, category, area]);

  const navigateWith = (changes) => {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([key, val]) => {
      if (val) next.set(key, val);
      else next.delete(key);
    });
    setParams(next);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorState />;

  return (
    <>
      <Row className="g-3 mb-3 align-items-end">
        <Col md={4}>
          <Form.Group>
            <Form.Label>{t("filterByCategory")}</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) =>
                navigateWith({ category: e.target.value, area: "" })
              }
            >
              <option value="">—</option>
              {categories.map((c) => (
                <option key={c.idCategory}>{c.strCategory}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>{t("filterByArea")}</Form.Label>
            <Form.Select
              value={area}
              onChange={(e) => navigateWith({ area: e.target.value, category: "" })}
            >
              <option value="">—</option>
              {areas.map((a, i) => (
                <option key={i}>{a.strArea}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4} className="text-md-end">
          <Button variant="outline-secondary" onClick={() => setParams({})}>
            {t("clearFilters")}
          </Button>
        </Col>
      </Row>

      {meals.length === 0 && <Alert variant="info">{t("noResults")}</Alert>}

      <Row className="g-4">
        {meals.map((m) => (
          <Col sm={6} lg={3} key={m.idMeal}>
            <MealCard meal={m} />
          </Col>
        ))}
      </Row>
      <p className="text-muted small mt-4">{t("apiLanguageNote")}</p>

    </>
  );
}
