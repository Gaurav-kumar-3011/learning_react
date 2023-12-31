import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
        <div className="heading">
            <img className="logo" src={LOGO_URL} />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;