import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Header } from "./core/components/Header"
import { Home } from "./pages/Home"
import { Search } from "./pages/Search"

export const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Navigate to="/" />}></Route>
            <Route path="/search" element={<Search />}></Route>
        </Routes>
    </BrowserRouter>
)