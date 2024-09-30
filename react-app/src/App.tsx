// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation_bar from "./components/Navigation_bar";
import HomePage from "./components/HomePage"; // Import the new HomePage component
import ScorePage from "./components/ScorePage";
import AdminPage from "./components/AdminPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <Navigation_bar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
