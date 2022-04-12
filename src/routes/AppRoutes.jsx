import { Routes, Route } from "react-router-dom";
import { Explore } from "pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

export { AppRoutes };
