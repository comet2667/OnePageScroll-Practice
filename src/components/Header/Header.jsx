import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div className="header__main">
            <div className='header__item__home'>
                <a href="#sectionOne">HOME</a>
            </div>
            <div className='header__item__page'>
                <a href="#sectionTwo">1페이지</a>
                <a href="#sectionThree">2페이지</a>
                <a href="#sectionFour">3페이지</a>
            </div>
        </div>
    );
}
export default Header;