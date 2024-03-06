import './Header.css';
import logo from './../assets/logo.svg';
function Header(){
    return (

        <div className="header-div">
            <div className="logo">
                 <img src={logo} alt="logo"/> 
                 <h1 className="logo-text">GeekFoods</h1>
            </div>

            <nav className="nav-bar">
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/about">Quote</a></li>
                    <li><a href="/Restaurant">Restaurant</a></li>
                    <li><a href="/Food">Food</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </nav>

            <div className="nav-button">
                <button className='nav-btn'>Get Started</button>
            </div>

        </div>
    );
}
export default Header;