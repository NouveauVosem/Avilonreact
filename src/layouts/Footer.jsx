import logoWhite from '../assets/img/logo-white.png';


function Footer () {
  return (
    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <img src={logoWhite} />
        </div>
        <div class="footer-assortment">
          <h4>Асортимент</h4>
          <p class="footer-text-white">Стілажі для супермаркетів</p>
          <p class="footer-text-white">Брендові стілажі</p>
          <p class="footer-text-white">Рол-контейнери, візки</p>
        </div>
        <div class="footer-info">
          <h4>Інформація</h4>
          <p class="footer-text-white">Контакти</p>
          <p class="footer-text-white">Про нас</p>
        </div>
        <div class="footer-contacts">
          <h4>Контакти</h4>
          <p class="footer-text-white">avilon@gmail.com</p>
          <p class="footer-text-white">+4 000 00 00 00</p>
          <p class="footer-text-white">+4 000 00 00 00</p>
        </div>
      </div>
    </footer>
  );
} 

export default Footer;