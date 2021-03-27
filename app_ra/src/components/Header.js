import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

export default function Header(params) {
    return(
        <div className ='header'>
            <div className='header_logo' >
                <img src = {TeslaLogo} alt = 'Tesla Logo'  />
            </div>

            <div className = 'header_center' >
                <ul>
                    <li><a href ='#modelS'>Model S</a></li>
                    <li><a href ='#modelX'>Model X</a></li>
                    <li><a href ='#modelY'>Model Y</a></li>
                    <li><a href ='#solar'>Solar roof</a></li>
                    <li><a href ='#sroofs'>Soler pane</a></li>
                </ul>
               

            </div>

            <div className = 'header_right' >
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>

        </div>
    )
};
