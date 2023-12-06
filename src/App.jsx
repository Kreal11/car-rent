import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Catalog } from "./pages/catalog/Catalog";
import { Favorites } from "./pages/favorites/Favorites";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
