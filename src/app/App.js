import DefaultLayout from "../layout/DefaultLayout";
import IndexPage from "../pages/IndexPage";
import About from "../pages/About";
import Login from "../pages/Login";
import Deals from "../pages/Deals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/*" element={<div>Not Found!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
