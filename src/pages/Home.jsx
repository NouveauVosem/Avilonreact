import triangleOrange from '../assets/img/triangle-orange.png';
import heroVideo from '../assets/video/ContainerKM.mp4';
import standsLoaded1 from '../assets/img/stands-loaded-1.png';
 

function Home () {
  return (
    <main>
      <section class="navigation-feed">{"Крихти > Крихти"}</section>

      <section class="section-hero">
        
        <div class="video-box">
          <video  src={heroVideo} autoPlay muted loop></video>
        </div>
      
      </section>

        <section class="section-main">
          <div class="title">
            <h1>Стілажі для супермаркетів</h1>
          </div>

          <div class="content-container">

            <div class="slider-container">
              <div class="slider-list">
                <div class="slider-item">
                  <p>Стілажі для супермаркетів</p>
                  <div class="triangle-container">
                    <img src={triangleOrange} />
                  </div>
                </div>
                <div class="slider-item">
                  <p>Стеллажи с сетчатой задней стенкой</p>
                  <div class="triangle-container">
                    <img src={triangleOrange} />
                  </div>
                </div>
                <div class="slider-item">
                  <p>Стеллажи с перфорированной задней стенкой</p>
                  <div class="triangle-container">
                    <img src={triangleOrange} />
                  </div>
                </div>
                <div class="slider-item">
                  <p>Стеллажи с перфорированной задней стенкой</p>
                  <div class="triangle-container">
                    <img src={triangleOrange} />
                  </div>
                </div>
              </div>
            </div>

            <div class="content-box">
              <div class="content-box-text">
                <h3>Заголовок h3</h3>
                <p>
                  On a basis of metal stand, 
                  the Bread Stand with wood 
                  shelves exposes your goods 
                  and serves for bakery products storage. 
                  Inclined shelves allow visualize the goods better.
                   On request this stand can be completed with storage basket, installed on the base of the stand and also with the demonstrative shelves.</p>
              </div>
              <div class="content-box-img">
                <img src={standsLoaded1} />
              </div>
            </div>
          </div>
        </section>

        <section class="section-main">
          <div class="title">
            <h1>Стілажі для супермаркетів</h1>
          </div>

          <div class="content-container">

            <div class="slider-container">
              <div class="slider-list">
                <div class="slider-item">
                  <p>Стілажі для супермаркетів</p>
                  <div class="triangle-container">
                    <img src={triangleOrange} />
                  </div>
                </div>
                <div class="slider-item">
                  <p>Стеллажи с сетчатой задней стенкой</p>
                  <div class="triangle-container">
                    <img src={triangleOrange} />
                  </div>
                </div>
                <div class="slider-item">
                  <p>Стеллажи с перфорированной задней стенкой</p>
                  <div class="triangle-container">
                    <img src={triangleOrange} />
                  </div>
                </div>
                <div class="slider-item">
                  <p>Стеллажи с перфорированной задней стенкой</p>
                  <div class="triangle-container">
                    <img src={triangleOrange} />
                  </div>
                </div>
              </div>
            </div>

            <div class="content-box">
              <div class="content-box-text">
                <h3>Заголовок h3</h3>
                <p>
                  On a basis of metal stand, 
                  the Bread Stand with wood 
                  shelves exposes your goods 
                  and serves for bakery products storage. 
                  Inclined shelves allow visualize the goods better.
                   On request this stand can be completed with storage basket, installed on the base of the stand and also with the demonstrative shelves.</p>
              </div>
              <div class="content-box-img">
                <img src={standsLoaded1} />
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

export default Home;