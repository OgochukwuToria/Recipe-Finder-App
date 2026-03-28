import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "../api/theMealDB";
import { Loading, ErrorState } from "../components/LoadingError";

export default function Home() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [randomMeal, setRandomMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  
  const heroImages = [
    "https://images.unsplash.com/photo-1617196034796-73a5f4b31847?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  //  Preload images
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  //  Crossfade every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        setFadeState("fade-in");
      }, 1000); // match animation duration
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  
  useEffect(() => {
    setLoading(true);
    Promise.all([api.listCategories(), api.listAreas(), api.random()])
      .then(([c, a, r]) => {
        setCategories(c.categories || []);
        setAreas(a.meals || []);
        setRandomMeal(r.meals?.[0]);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorState />;

  return (
    <>
      <section className="hero-container mb-5 rounded-4 shadow overflow-hidden position-relative">
        <div
          className={`hero-background ${fadeState}`}
          style={{
            backgroundImage: `url(${heroImages[currentIndex]})`
          }}
        ></div>

        
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
          {/* <h1 className="display-5 fw-bold mb-3 text-shadow">
             {t("appTitle")}
          </h1>
          <p className="lead mb-0">{t("searchPlaceholder")}</p>
        </div>  */}

       <h1 className="display-5 fw-bold mb-3 text-shadow">
  {t("heroTitle")}
</h1>
<p className="lead mb-0">{t("heroSubtitle")}</p>

</div> 
      </section>

      
      <Row className="gy-4">
        <Col md={8}>
          <Card className="border-0 bg-light h-100 shadow-sm rounded-4">
            <Card.Body>
              <h4 className="mb-3">{t("categories")}</h4>
              <Row className="g-3">
                {categories.slice(0, 8).map((cat) => (
                  <Col sm={6} lg={3} key={cat.idCategory}>
                    <Card
                      as={Link}
                      to={`/search?category=${cat.strCategory}`}
                      className="h-100 text-decoration-none border-0 hover-card"
                    >
                      <Card.Img
                        src={cat.strCategoryThumb}
                        alt={cat.strCategory}
                        className="rounded-top-4"
                      />
                      <Card.Body>
                        <Card.Title className="h6 mb-0 text-dark">
                           {cat.strCategory}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <h4 className="my-4">{t("areas")}</h4>
              <div className="d-flex flex-wrap gap-2">
                {areas.slice(0, 15).map((a, i) => (
                  <Badge
                    key={i}
                    bg="secondary"
                    as={Link}
                    to={`/search?area=${a.strArea}`}
                    className="text-decoration-none fs-6 p-2 rounded-3"
                  >
                    {a.strArea}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        
        <Col md={4}>
          {randomMeal && (
            <Card className="shadow-sm rounded-4 border-0 h-100">
              <Card.Img
                src={randomMeal.strMealThumb}
                alt={randomMeal.strMeal}
                className="rounded-top-4"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="text-muted mb-1">
                  {t("randomPick")}
                </Card.Subtitle>
                <Card.Title className="fw-semibold">
                  {randomMeal.strMeal}
                </Card.Title>
                <div className="mt-auto">
                  <Button
                    as={Link}
                    to={`/meal/${randomMeal.idMeal}`}
                    variant="success"
                    className="w-100 rounded-pill fw-semibold"
                  >
                    {t("viewRecipe")}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
}
