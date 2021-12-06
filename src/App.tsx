import React from 'react'
import { AppHeader, NavBar, SplashScreen } from './components'
import { Dashboard } from './screens/dashboard'
import './styles/app.scss'

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
