import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MealCard({ meal }) {
  const { t } = useTranslation();
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={meal.strMealThumb} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{meal.strMeal}</Card.Title>
        <Button as={Link} to={`/meal/${meal.idMeal}`} variant="primary" className="mt-auto">
          {t("search")}
        </Button>
      </Card.Body>
    </Card>
  );
}
