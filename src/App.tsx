import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ChatPage from "./pages/chat";
import ProtectedRoute from "./shared/protectedRoute";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/chat/" element={<ProtectedRoute><ChatPage/></ProtectedRoute>} />
            <Route path="/" element={<ProtectedRoute><ChatPage/></ProtectedRoute>} />
            <Route path="/chat/:id" element={<ProtectedRoute><ChatPage/></ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
