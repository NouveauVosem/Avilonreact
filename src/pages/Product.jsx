import { products } from "../products";
import { useParams } from "react-router";
function Product () {
  
  const param = useParams();
  const productId = param.id;
  const product = products.find(p => p.id == productId);

  // console.log(param, productId);
  console.log(product);
  return (
    <main>
      <section class="navigation-feed">{'Крихти > Крихти'}</section>

      <section class="product-section">
        <div class="product-title">
          <h1>Торговий стілаж серії “Євро +”</h1>
        </div>
        <div class="product-gallery-container">
          
          
          {product.img.map((img) => {
            return (<div class="product-gallery-image">
              <img src={img} alt="Торговий стілаж сері�� “��вро +”" />
            </div>)
          } )}
          {/* <div class="product-gallery-image">
            <img src={product.img[0]} alt="Торговий стілаж сері�� “��вро +”" />
          </div>
          <div class="product-gallery-image">
            <img src={product.img[1]} alt="Торговий стілаж сері�� “��вро +”" />
          </div>
          <div class="product-gallery-image">
            <img src={product.img[2]} alt="Торговий стілаж сері�� “��вро +”" />
          </div> */}
        </div>
        <div class="product-details-container">
          <div class="product-details-title">
            <h2>Характеристика</h2>
          </div>
          <div class="product-details-wrap">
            <div class="product-details-text">
              <p>
                The body of the trolley is made from sheet aluminum alloy with a durable 15-micron anodized coating
                The bottom is equipped with a spring, providing a lowering/raising function during loading/unloading
                The bottom smoothly lowers as it is loaded and returns to its original position during unloading
              The strength and durability of the construction are ensured by a robust iron base that maintains its shape
              </p>
            </div>
            <div class="product-details-order">
              <button class="btn-orange">Замовити</button>
            </div>
          </div>
        </div>
      </section>

      <section class="product-parts">
        <div class="product-parts-title">
          <h2>Топпери</h2>
        </div>
        
        <div class="product-parts-wrap">

          <div class = "product-parts-list">
            <div class = "product-parts-item">
              <div class = "product-parts-item-text">
                <p>Шапка з точковими світильниками</p>
              </div>
              <div class = "product-parts-item-triangle">
                <img src="./assets/img/triangle-orange.png" />
              </div>  
            </div>
            <div class = "product-parts-item">
              <div class = "product-parts-item-text">
                <p>Шапка з точковими світильниками</p>
              </div>
              <div class = "product-parts-item-triangle">
                <img src="./assets/img/triangle-orange.png" />
              </div>  
            </div>
            <div class = "product-parts-item">
              <div class = "product-parts-item-text">
                <p>Шапка з точковими світильниками</p>
              </div>
              <div class = "product-parts-item-triangle">
                <img src="./assets/img/triangle-orange.png" />
              </div>  
            </div>
          </div>

          <div class = "product-parts-info">
            <div class = "product-parts-info-image">
              <img src="./assets/img/parts/topper-1.jpg" alt="Топпери" />
            </div>
            <div class = "product-parts-info-text">
              <p>Опис топпера з точковими світильниками</p>
            </div>
          </div>

        </div>
      </section>

      <section class="product-parts">
        <div class="product-parts-title">
          <h2>Топпери</h2>
        </div>
        
        <div class="product-parts-wrap">

          <div class = "product-parts-list">
            <div class = "product-parts-item">
              <div class = "product-parts-item-text">
                <p>Шапка з точковими світильниками</p>
              </div>
              <div class = "product-parts-item-triangle">
                <img src="./assets/img/triangle-orange.png" />
              </div>  
            </div>
            <div class = "product-parts-item">
              <div class = "product-parts-item-text">
                <p>Шапка з точковими світильниками</p>
              </div>
              <div class = "product-parts-item-triangle">
                <img src="./assets/img/triangle-orange.png" />
              </div>  
            </div>
            <div class = "product-parts-item">
              <div class = "product-parts-item-text">
                <p>Шапка з точковими світильниками</p>
              </div>
              <div class = "product-parts-item-triangle">
                <img src="./assets/img/triangle-orange.png" />
              </div>  
            </div>
          </div>

          <div class = "product-parts-info">
            <div class = "product-parts-info-image">
              <img src="./assets/img/parts/topper-1.jpg" alt="Топпери" />
            </div>
            <div class = "product-parts-info-text">
              <p>Опис топпера з точковими світильниками</p>
            </div>
          </div>

        </div>
      </section>

      <section class="contact-section">
        <div clas="contact-container">
        <div class="contact-title">
          <h3>Звязок з нами</h3>
          <p>Залишіть нам свої контактні данні, та ми звяжемося з вами в короткі терміни</p>
        </div>
        <form action="https://formsubmit.co/nouveauvosem@gmail.com" method="POST" class="contact-input-form">
          <input class="contact-input" name="name" type="text" placeholder="Iм'я" />
          <input class="contact-input" name="email" type="text" placeholder="Email" />
          <input class="contact-input" name="subject" type="text" placeholder="Номер телефону" />
          <textarea name="message" class="contact-textarea" type="text" placeholder="Коментар"></textarea>
          <p class="small-text">*інформація про правила конфеденційності, та не передання особистої інформації третім особaм</p>
          <button class="btn-orange">Відправити</button>
        </form>
        </div>
      </section>
          
    </main>
  );
}

export default Product;