import '../styles/component.styles/navbar.scss'
import {
    IoRocketOutline,
    IoTodayOutline,
    IoSpeedometerOutline,
    IoMailUnreadOutline,
    IoExtensionPuzzleOutline,
    IoCreateOutline,
    IoHomeOutline,
    IoBuildOutline,
    IoPersonOutline
} from 'react-icons/io5'

export function NavBar() {
    return (
        <div className="app-navbar">
            <ol>
                <li className="app-icon">
                    <IoRocketOutline size={28} />
                </li>
                <li>
                    <IoHomeOutline size={28} />
                </li>
                <li className="active">
                    <IoSpeedometerOutline size={28} />
                </li>
                <li>
                    <IoMailUnreadOutline size={28} />
                </li>
                <div className="divider"></div>
                <li>
                    <IoCreateOutline size={28} />
                </li>
                <li>
                    <IoTodayOutline size={28} />
                </li>
                <div className="divider"></div>
                <li>
                    <IoBuildOutline size={28} />
                </li>
                <li>
                    <IoExtensionPuzzleOutline size={28} />
                </li>
                <div className="divider"></div>
                <li>
                    <IoPersonOutline size={28} />
                </li>
            </ol>
        </div>
    )
}
