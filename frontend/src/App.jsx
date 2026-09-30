import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Skills from "./pages/Skills";

function App() {
    return (
        <BrowserRouter>
            <div className="app-shell">
                <Navbar />

                <main className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;