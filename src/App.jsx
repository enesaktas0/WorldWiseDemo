import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="WorldWiseDemo" element={<HomePage />} />
        <Route path="WorldWiseDemo/pricing" element={<Pricing />} />
        <Route path="WorldWiseDemo/product" element={<Product />} />
        <Route path="WorldWiseDemo/login" element={<Login />} />
        <Route path="WorldWiseDemo/app" element={<AppLayout />}>
          <Route index element={<CityList />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<p>List of countries</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
