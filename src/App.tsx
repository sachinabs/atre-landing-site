
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Views/AboutUs/About";
import ArticlesDetails from "./Views/ArticleDetails/ArticlesDetails";
import Career from "./Views/Career/Career";
import Home from "./Views/Home";
import Articles from "./Views/NewsArticles/Articles";
import Product from "./Views/Product/Product";

function App() {


  return (
    <div className="">
      <NavBar />
      <div className="custom-overflow h-screen scroll-smooth">
        <Routes  >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/article/:id" element={<ArticlesDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
