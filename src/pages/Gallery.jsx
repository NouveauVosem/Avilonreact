import { products } from '../products.js';
import ProductCard from './components/ProductCard.jsx';
import arrowDownGrey from '../assets/img/arrow-down-grey.png';

function Gallery () {

  const productList = products.map((product) => {
    return <ProductCard product={product}/>;
  })

  return (
    <main>
      <section class="navigation-feed">{"Крихти > Крихти"}</section>
      
        <section class="gallery-selector">
          
          <div class="combo-box-container"> 
            <div class="btn-combo-box">
              <div class="combo-box-text-container">
                <p>Стілажі для супермаркетів</p>
              </div>
              <div class="combo-box-arrow">
                <img src={arrowDownGrey} />
              </div>
            </div>
            <div class="dropdown-menu">
              <div class="dropdown-item">
                <p>Стілажі для супермаркетів 2</p>
              </div>
              <div class="dropdown-item">
                <p>Стілажі для супермаркетів 2</p>
              </div>
              <div class="dropdown-item">
                <p>Стілажі для супермаркетів 2</p>
              </div>
              
            </div>
          </div>


          <div class="btn-combo-box">
            <div class="combo-box-text-container">
              <p>Брендовані стілажі</p>
            </div>
            <div class="combo-box-arrow">
              <img src={arrowDownGrey} />
            </div>
          </div>
          <div class="btn-combo-box">
            <div class="combo-box-text-container">
              <p>Рол-контейнери,візок</p>
            </div>
            <div class="combo-box-arrow">
              <img src={arrowDownGrey} />
            </div>
          </div>
        </section>

        <section class="gallery">
          <div class="gallery-title">
            <h2>Ролл-контейнери спеціалізовані</h2>
          </div>
          <div class="product-list">
             {productList}
          </div>
        </section>
          
        <section class="contact-section">
          <div clas="contact-container">
          <div class="contact-title">
            <h3>Звязок з нами</h3>
            <p>Залишіть нам свої контактні данні, та ми звяжемося з вами в короткі терміни</p>
          </div>
          <form class="contact-input-form">
            <input class="contact-input" type="text" placeholder="Iм'я" />
            <input class="contact-input" type="text" placeholder="Email" />
            <input class="contact-input" type="text" placeholder="Номер телефону" />
            <textarea class="contact-textarea" type="text" placeholder="Коментар"></textarea>
            <p class="small-text">*інформація про правила конфеденційності, та не передання особистої інформації третім особaм</p>
            <button class="btn-orange">Відправити</button>
          </form>
          </div>
        </section>
        
    </main>
  );
}

export default Gallery