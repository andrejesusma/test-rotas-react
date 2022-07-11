import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import { Home } from "./pages/Home";
import { Dome } from "./pages/Dome";
import './style/global.css'
import App from './App';

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/dome" element={<Dome />} />
            </Routes>
        </Router>
    )
}