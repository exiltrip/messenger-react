import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ChatPage from "./pages/chat";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/chat" element={<ChatPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
