import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Location = lazy(() => import("./pages/Location"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="location/:roomId" element={<Location />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
