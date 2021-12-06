import React from 'react'
import '../styles/component.styles/splash.screen.scss'

export function SplashScreen() {
    return (
        <div className="splash-screen">
            <div className="multi-ripple">
                <div></div>
                <div>
                    <img
                        className="app-logo"
                        src="/icons/apple-touch-icon.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
