import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Logout from "./pages/Logout";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Forgotpassword from "./pages/ForgotPassword";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* landing page */}
      <Route path="/" element={<LandingPage />} />
      {/* Authentication pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/log-out" element={<Logout />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<Forgotpassword />} />
    </Routes>
  );
}

export default App;
