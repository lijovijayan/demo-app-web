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
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function App() {
    return (
        <div className="app-container">
            {/* <SplashScreen /> */}
            <div className="navbar">
                <NavBar />
            </div>
            <div className="app-content">
                <AppHeader />
                <div className="screen-content">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default App
