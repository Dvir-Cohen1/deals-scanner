import DefaultLayout from "../layout/DefaultLayout";
import IndexPage from "../pages/IndexPage";
import About from "../pages/About";
import Login from "../pages/Login";
import Deals from "../pages/Deals";
import { HashRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/*" element={<div>Not Found!</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
