import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { api } from "../api/theMealDB";
import { Loading, ErrorState } from "../components/LoadingError";
import useFavorites from "../i18n/hooks";

export default function MealDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    api.lookupMeal(id)
      .then((data) => setMeal(data.meals?.[0]))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  const ingredients = useMemo(() => {
    if (!meal) return [];
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const meas = meal[`strMeasure${i}`];
      if (ing) list.push(`${ing} ${meas}`);
    }
    return list;
  }, [meal]);

  if (loading) return <Loading />;
  if (error || !meal) return <ErrorState />;

  const fav = isFavorite(meal.idMeal);

  return (
    <Row className="g-4">
      <Col md={5}>
        <Card className="shadow-sm">
          <Card.Img src={meal.strMealThumb} />
          <Card.Body>
            <Button
              onClick={() => toggleFavorite(meal)}
              variant={fav ? "danger" : "outline-primary"}
            >
              {fav ? t("removeFavorite") : t("addFavorite")}
            </Button>
            <div className="mt-3 d-flex gap-2 flex-wrap">
              {meal.strCategory && <Badge bg="secondary">{meal.strCategory}</Badge>}
              {meal.strArea && <Badge bg="info">{meal.strArea}</Badge>}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={7}>
        <h2>{meal.strMeal}</h2>
        <strong>{t("ingredients")}:</strong>
        <ul>{ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
        <strong>{t("instructions")}:</strong>
        <p style={{ whiteSpace: "pre-line" }}>{meal.strInstructions}</p>
        <p className="text-muted small mt-4">{t("apiLanguageNote")}</p>

      </Col>
    </Row>
  );
  
}
