import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import RootLayout from "../Components/Layouts/RootLayout"
import Home from "../Pages/Home/Home"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter