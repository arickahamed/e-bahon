import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Destination from "./components/Destination/Destination";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import GlobalContext from "./context/GlobalContext";

function App() {
    return (
        <div className="App">
            <GlobalContext>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path="/destination"
                        element={
                            <PrivateRoute>
                                <Destination />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                <Footer />
            </GlobalContext>
        </div>
    );
}

export default App;
