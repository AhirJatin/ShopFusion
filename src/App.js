import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HomePage from "./pages/home/HomePage";
import All from "./pages/categories/All";
import MensClothing from "./pages/categories/MensClothing";
import WomensClothing from "./pages/categories/WomensClothing";
import Jewellery from "./pages/categories/Jewellery";
import Electronics from "./pages/categories/Electronics";
import Product from "./pages/product/Product";
import Layout from "./pages/categories/Layout";
import Cart from "./components/Cart/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="categories" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="all" element={<All />} />
          <Route path="mens" element={<MensClothing />} />
          <Route path="womens" element={<WomensClothing />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewellery" element={<Jewellery />} />
        </Route>

        <Route path="categories/product/:id" element={<Product />} />
      </Routes>
      <Footer />
      <Cart />
    </div>
  );
}

export default App;
