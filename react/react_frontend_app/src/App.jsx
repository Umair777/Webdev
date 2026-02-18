import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageA from "./pages/pageA";
import PageB from "./pages/pageB";

function App() {
  return (
    <BrowserRouter>
      <h1>Happiness Alert!</h1>

      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
