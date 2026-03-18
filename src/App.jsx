import React from 'react'
import Landing from "./pages/landing.jsx";
import { Route, Routes} from "react-router-dom";
import Info from "./pages/Info.jsx";

const App = () => {
    return (
        <div>
            <Routes>
            <Route  path="/" element={<Landing/>} />
            <Route exact path="/info" element={<Info/>} />
        </Routes> </div>
    )
}
export default App
