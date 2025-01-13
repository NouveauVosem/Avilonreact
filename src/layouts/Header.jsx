import avilonLogo from '../assets/img/logo.png';
import { NavLink } from 'react-router';
function Header() {
  return (
    <header>
      <div class="language-container">
          <button class="btn-light">укр</button>
          <button class="btn-light">eng</button>
      </div>
      <div class="header-content">
        
        <div class="header-left">
          <div class="logo">
            <NavLink to="/"><img src={avilonLogo}/></NavLink>
          </div>
        </div>
        <div class="header-right">
          <nav class="navbar-container">
              <li class="navbar-item"><NavLink to="/gallery">Галерея</NavLink></li>
              <li class="navbar-item"><a href="#">Про нас</a></li>
              <li class="navbar-item"><a href="#">Контакти</a></li>
          </nav>
          <button class="btn-orange">Замовити</button>
        </div>
      </div>
    </header>
  )
};

export default Header;