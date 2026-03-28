import { Row, Col, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import MealCard from "../components/MealCard";
import useFavorites from "../i18n/hooks";

export default function Favorites() {
  const { t } = useTranslation();
  const { favorites } = useFavorites();

  if (favorites.length === 0)
    return <Alert variant="info">{t("noResults")}</Alert>;

  return (
    <Row className="g-4">
      {favorites.map((m) => (
        <Col sm={6} lg={3} key={m.idMeal}>
          <MealCard meal={m} />
        </Col>
      ))}
    </Row>
  );
}
