import DefaultLayout from "../layout/DefaultLayout";
import IndexPage from "../pages/IndexPage";
import About from "../pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col space-between  text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<IndexPage />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
