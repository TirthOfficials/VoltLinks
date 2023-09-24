import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro142 from "./pages/MacBookPro142";
import BuyConfirmPage from "./pages/BuyConfirmPage";
import SellConfirmPage from "./pages/SellConfirmPage";
import AboutPage from "./pages/AboutPage";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/buy-confirm-page":
        title = "";
        metaDescription = "";
        break;
      case "/sell-confirm-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-page":
        title = "";
        metaDescription = "";
        break;
      case "/buy":
        title = "";
        metaDescription = "";
        break;
      case "/sell":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookPro142 />} />
      <Route path="/buy-confirm-page" element={<BuyConfirmPage />} />
      <Route path="/sell-confirm-page" element={<SellConfirmPage />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/sell" element={<Sell />} />
    </Routes>
  );
}
export default App;
