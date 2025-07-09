import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import "./App.css";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Create from "./pages/posts/create";
import Show from "./pages/posts/Show";

export default function App() {
  const { user } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/create" element={user ? <Create /> : <Login />} />
          <Route path="/posts/:id" element={<Show />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
