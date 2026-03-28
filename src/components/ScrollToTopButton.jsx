
// import { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import { ArrowUp } from "lucide-react";

// export default function ScrollToTopButton() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setVisible(window.scrollY > 400);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   if (!visible) return null;

//   return (
//     <Button
//       variant="warning"
//       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         borderRadius: "50%",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
//         zIndex: 1000,
//       }}
//     >
//       <ArrowUp size={20} />
//     </Button>
//   );
// }
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      variant="warning"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <ArrowUp size={20} />
    </Button>
  );
}
