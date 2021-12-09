import { AppHeader, NavBar } from './components'
import { Dashboard } from './screens/dashboard'
import './styles/app.scss'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
} from 'chart.js'

// charts JS - registering components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    Title,
    Filler,
    RadialLinearScale
)
// END - charts JS - registering components

function App() {
    return (
        <div className="app-container">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="app-content">
                <AppHeader />
                <div className="screen-content">
                    <Dashboard />
                </div>
            </div>
            <div className="not-implemented">
                <img
                    src="/assets/images/responsive.png"
                    alt="under development"
                />
                <span>
                    Responsive design is under development, try a higher
                    dimensional resolution!
                </span>
            </div>
        </div>
    )
}

export default App
