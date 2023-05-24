<template>
  <section class="about-section">
    <div class="heading">
      <span>О нас</span>
      <h3>Наша история</h3>
    </div>

    <div class="row">
      <div class="about-content">
        <img src="../assets/images/shef.jpg" alt="" />
        <div class="about-content-text">
          <p>
            Добро пожаловать в мир вкуса и удовольствия! Рады приветствовать вас на сайте ресторана ufood, уникального
            заведения, которое предлагает неповторимую кулинарную атмосферу в самом сердце прекрасной Удмуртии.

            С первого дня нашей работы в ресторане ufood, мы посвятили себя созданию идеального сочетания качественной
            кухни, безупречного обслуживания и уютной атмосферы. Мы стремимся привносить инновации в традиционные рецепты
            разных кухон мира, чтобы порадовать вас новыми гастрономическими открытиями и неизменным вкусом родного края.
          </p>
          <p> Наше меню богато разнообразием блюд, которые приготовлены с использованием только самых свежих и
            качественных
            ингредиентов, выращенных на местных фермах и отобранных с особой тщательностью. Каждое блюдо, поданное на
            наших столах, является плодом мастерства наших шеф-поваров, которые с любовью и творческим подходом создают
            уникальные кулинарные шедевры.

            В ресторане ufood каждый гость важен для нас, и мы делаем все возможное, чтобы обеспечить незабываемый опыт и
            максимальное удовольствие от посещения нашего заведения</p>
          Мы гордимся тем, что наш ресторан стал неотъемлемой частью культурной и гастрономической жизни Удмуртии. Мы
          постоянно стремимся к совершенству и радуемся, когда наши гости возвращаются к нам снова и снова, чтобы
          насладиться вкусом наших блюд и отдохнуть в уютной атмосфере.
          <p>

            В ресторане ufood каждый гость важен для нас, и мы делаем все возможное, чтобы обеспечить незабываемый опыт и
            максимальное удовольствие от посещения нашего заведения</p>
          <p>

          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="about-article">
        <h3>Еда объединяет людей</h3>
      </div>
    </div>

    <div class="row gallery">
      <div class="wrapper">
        <img src="../assets/images/onionsoup.jpg" alt="" />
        <img src="../assets/images/borsh.jpg" alt="" />
        <img src="../assets/images/okroshka.jpg" alt="" />
        <img src="../assets/images/olivie.jpg" alt="" />
        <img src="../assets/images/shaslikkur.jpg" alt="" />
        <img src="../assets/images/cezar.jpg" alt="" />
        <img src="../assets/images/blini.jpg" alt="" />
        <img src="../assets/images/potato.jpg" alt="" />
        <img src="../assets/images/tortchis.jpg" alt="" />
        <img src="../assets/images/sibas.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
@import url("https://fonts.google.com/share?selection.family=Mulish:ital,wght@1,200");

.about-section {
  padding: 2rem 9%;
}

.about-section .about-content {
  display: flex;
  width: 100%;
}

.about-section .about-content img {
  background-color: rgb(249, 249, 249);
}

.about-section .about-content .about-content-text {
  font-size: 16px;
  padding-left: 50px;
}

.about-section .about-article {
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  background-color: #27ae60;
  width: 100%;
}

.about-section .about-article h3 {
  font-family: "Satisfy", cursive;
  font-size: 32px;
  color: white;
}

.about-section .gallery {
  overflow: hidden;
  padding: 100px;
}

.about-section .gallery .wrapper {
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 1200px;
  max-height: 1200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-items: center;
  align-items: center;
}

.about-section .gallery .wrapper img {
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform: scale(1);
  transition: all 0.25s;
}

.about-section .gallery .wrapper img:nth-child(7n + 1) {
  grid-column: 2 / span 2;
}

.about-section .gallery .wrapper img:hover {
  z-index: 2;
  transform: scale(2);
}

@media (max-width: 768px) {
  .about-section .about-content img {
    width: 250px;
  }

  .about-section .gallery .wrapper img:hover {
    transform: scale(2.5);
  }
}

@media (max-width: 576px) {
  .about-section .about-content img {
    width: inherit;
  }

  .about-section .about-content {
    display: block;
  }

  .about-section .about-content .about-content-text {
    padding-left: 0px;
  }

  .about-section .gallery {
    padding: 50px 0px;
  }

  .about-section .gallery .wrapper img {
    max-width: 100%;
  }

  .about-section .gallery .wrapper {
    grid-gap: 2vmin;
  }

  .about-section .gallery .wrapper img:hover {
    transform: scale(2);
  }
}
</style>
