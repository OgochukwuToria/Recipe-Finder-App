// // // src/pages/RecipeDetails.jsx
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { lookupMealById } from "../api/theMealDB";
// // import { Row, Col, Image, Button, ListGroup } from "react-bootstrap";
// // import { useTranslation } from "react-i18next";

// // function extractIngredients(meal) {
// //   const items = [];
// //   for (let i = 1; i <= 20; i++) {
// //     const ing = meal[`strIngredient${i}`];
// //     const measure = meal[`strMeasure${i}`];
// //     if (ing && ing.trim()) items.push(`${ing} — ${measure || ""}`);
// //   }
// //   return items;
// // }

// // export default function RecipeDetails() {
// //   const { t } = useTranslation();
// //   const { id } = useParams();
// //   const [meal, setMeal] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     (async () => {
// //       setLoading(true);
// //       const data = await lookupMealById(id);
// //       setMeal(data);
// //       setLoading(false);
// //     })();
// //   }, [id]);

// //   if (loading) return <div>{t("loading")}</div>;
// //   if (!meal) return <div>{t("noResults")}</div>;

// //   const ingredients = extractIngredients(meal);

// //   const addToFavorites = () => {
// //     const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
// //     if (!fav.find((f) => f.idMeal === meal.idMeal)) {
// //       fav.push({ idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: meal.strMealThumb });
// //       localStorage.setItem("favorites", JSON.stringify(fav));
// //       alert(t("addedFav"));
// //     } else {
// //       alert(t("alreadyFav"));
// //     }
// //   };

// //   return (
// //     <>
// //       <Row>
// //         <Col md={4}>
// //           <Image src={meal.strMealThumb} fluid rounded />
// //           <h3 className="mt-2">{meal.strMeal}</h3>
// //           <p>{meal.strArea} · {meal.strCategory}</p>
// //           <Button onClick={addToFavorites}>{t("addToFavorites")}</Button>
// //         </Col>
// //         <Col md={8}>
// //           <h4>{t("ingredients")}</h4>
// //           <ListGroup className="mb-3">
// //             {ingredients.map((it, idx) => (
// //               <ListGroup.Item key={idx}>{it}</ListGroup.Item>
// //             ))}
// //           </ListGroup>

// //           <h4>{t("instructions")}</h4>
// //           <p style={{ whiteSpace: "pre-line" }}>{meal.strInstructions}</p>

// //           {meal.strYoutube && (
// //             <>
// //               <h5>{t("video")}</h5>
// //               <a href={meal.strYoutube} target="_blank" rel="noreferrer">{meal.strYoutube}</a>
// //             </>
// //           )}
// //         </Col>
// //       </Row>
// //     </>
// //   );
// // }

// // // src/pages/RecipeDetails.jsx
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { lookupMealById } from "../api/theMealDB";
// // import { Row, Col, Image, Button, ListGroup, Card } from "react-bootstrap";
// // import { useTranslation } from "react-i18next";

// // function extractIngredients(meal) {
// //   const items = [];
// //   for (let i = 1; i <= 20; i++) {
// //     const ing = meal[`strIngredient${i}`];
// //     const measure = meal[`strMeasure${i}`];
// //     if (ing && ing.trim()) items.push(`${ing} — ${measure || ""}`);
// //   }
// //   return items;
// // }

// // export default function RecipeDetails() {
// //   const { t } = useTranslation();
// //   const { id } = useParams();
// //   const [meal, setMeal] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     (async () => {
// //       setLoading(true);
// //       const data = await lookupMealById(id);
// //       setMeal(data);
// //       setLoading(false);
// //     })();
// //   }, [id]);

// //   if (loading) return <div>{t("loading")}</div>;
// //   if (!meal) return <div>{t("noResults")}</div>;

// //   const ingredients = extractIngredients(meal);

// //   const addToFavorites = () => {
// //     const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
// //     if (!fav.find((f) => f.idMeal === meal.idMeal)) {
// //       fav.push({ idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: meal.strMealThumb });
// //       localStorage.setItem("favorites", JSON.stringify(fav));
// //       alert(t("addedFav"));
// //     } else {
// //       alert(t("alreadyFav"));
// //     }
// //   };

// //   return (
// //     <Row className="g-4">
// //       <Col md={4}>
// //         <Card className="shadow-sm">
// //           <Card.Img variant="top" src={meal.strMealThumb} />
// //           <Card.Body>
// //             <Card.Title>{meal.strMeal}</Card.Title>
// //             <Card.Text>{meal.strArea} · {meal.strCategory}</Card.Text>
// //             <Button variant="primary" onClick={addToFavorites} className="w-100">
// //               {t("addToFavorites")}
// //             </Button>
// //           </Card.Body>
// //         </Card>

// //         <h5 className="mt-4">{t("ingredients")}</h5>
// //         <ListGroup>
// //           {ingredients.map((ing, idx) => (
// //             <ListGroup.Item key={idx}>{ing}</ListGroup.Item>
// //           ))}
// //         </ListGroup>
// //       </Col>

// //       <Col md={8}>
// //         <h4>{t("instructions")}</h4>
// //         <p style={{ whiteSpace: "pre-line" }}>{meal.strInstructions}</p>
// //         {meal.strYoutube && (
// //           <div className="mt-3">
// //             <h5>{t("video")}</h5>
// //             <a href={meal.strYoutube} target="_blank" rel="noreferrer">{meal.strYoutube}</a>
// //           </div>
// //         )}
// //       </Col>
// //     </Row>
// //   );
// // }



// // src/pages/RecipeDetails.jsx
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { lookupMealById } from "../api/theMealDB";
// import { Row, Col, Card, ListGroup, Button, Spinner } from "react-bootstrap";
// import { useTranslation } from "react-i18next";

// export default function RecipeDetails() {
//   const { t } = useTranslation();
//   const { id } = useParams();
//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       const data = await lookupMealById(id);
//       setMeal(data);
//       setLoading(false);
//     })();
//   }, [id]);

//   const extractIngredients = (meal) => {
//     const items = [];
//     for (let i = 1; i <= 20; i++) {
//       const ing = meal[`strIngredient${i}`];
//       const measure = meal[`strMeasure${i}`];
//       if (ing && ing.trim()) items.push(`${ing} — ${measure || ""}`);
//     }
//     return items;
//   };

//   const addToFavorites = () => {
//     const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
//     if (!fav.find((f) => f.idMeal === meal.idMeal)) {
//       fav.push({ idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: meal.strMealThumb });
//       localStorage.setItem("favorites", JSON.stringify(fav));
//       alert(t("addToFavorites"));
//     } else {
//       alert(t("alreadyFav"));
//     }
//   };

//   if (loading) return <div className="text-center my-5"><Spinner animation="border" /> {t("loading")}</div>;
//   if (!meal) return <p>{t("noResults")}</p>;

//   const ingredients = extractIngredients(meal);

//   return (
//     <Row className="g-4 my-4">
//       <Col md={4}>
//         <Card className="shadow-sm">
//           <Card.Img variant="top" src={meal.strMealThumb} />
//           <Card.Body>
//             <Card.Title>{meal.strMeal}</Card.Title>
//             <Card.Text>{meal.strArea} · {meal.strCategory}</Card.Text>
//             <Button variant="primary" className="w-100" onClick={addToFavorites}>{t("addToFavorites")}</Button>
//           </Card.Body>
//         </Card>

//         <h5 className="mt-4">{t("ingredients")}</h5>
//         <ListGroup>
//           {ingredients.map((ing, idx) => <ListGroup.Item key={idx}>{ing}</ListGroup.Item>)}
//         </ListGroup>
//       </Col>

//       <Col md={8}>
//         <h4>{t("instructions")}</h4>
//         <p style={{ whiteSpace: "pre-line" }}>{meal.strInstructions}</p>

//         {meal.strYoutube && (
//           <div className="mt-3">
//             <h5>{t("video")}</h5>
//             <a href={meal.strYoutube} target="_blank" rel="noreferrer">{meal.strYoutube}</a>
//           </div>
//         )}
//       </Col>
//     </Row>
//   );
// }
