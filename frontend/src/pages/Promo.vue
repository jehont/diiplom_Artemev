<template>
  <div class="promotions">
    <div class="heading">
      <span>Акции</span>
      <h3>Лучшее качество по разумной цене</h3>
    </div>

    <div class="promotions-item">
      <div class="table-responsive">
        <table class="table table-bordered text-center">
          <thead>
            <tr class="bg-light-gray">
              <th class="text-uppercase">Время</th>
              <th class="text-uppercase">Понедельник</th>
              <th class="text-uppercase">Вторник</th>
              <th class="text-uppercase">Среда</th>
              <th class="text-uppercase">Четверг</th>
              <th class="text-uppercase">Пятница</th>
              <th class="text-uppercase">Суббота</th>
              <th class="text-uppercase">Воскресенье</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="align-middle">09:00 - 11:00</td>
              <td>
                <span class="bg-brown activity-name">Завтрак</span>
                <div class="activity-time">Скидка 10%</div>
              </td>
              <td>
                <span class="bg-brown activity-name">Завтрак</span>
                <div class="activity-time">Скидка 10%</div>
              </td>

              <td>
                <span class="bg-brown activity-name">Завтрак</span>
                <div class="activity-time">Скидка 10%</div>
              </td>
              <td>
                <span class="bg-brown activity-name">Завтрак</span>
                <div class="activity-time">Скидка 10%</div>
              </td>
              <td>
                <span class="bg-brown activity-name">Завтрак</span>
                <div class="activity-time">Скидка 10%</div>
              </td>
              <td class="bg-light-gray"></td>
              <td class="bg-light-gray"></td>
            </tr>

            <tr>
              <td class="align-middle">11:00 - 14:00</td>
              <td>
                <span class="bg-beige activity-name">Обед</span>
                <div class="activity-time">Бесплатный напиток</div>
              </td>
              <td class="bg-light-gray"></td>
              <td>
                <span class="bg-beige activity-name">Обед</span>
                <div class="activity-time">Бесплатный напиток</div>
              </td>
              <td class="bg-light-gray"></td>
              <td>
                <span class="bg-beige activity-name">Обед</span>
                <div class="activity-time">Бесплатный напиток</div>
              </td>
              <td class="bg-light-gray"></td>
              <td class="bg-light-gray"></td>
            </tr>

            <tr>
              <td class="align-middle">15:00 - 17:00</td>
              <td class="bg-light-gray"></td>
              <td>
                <span class="bg-earth activity-name">Полдник</span>
                <div class="activity-time">
                  Скидака на 20% Гарниры и дессерты
                </div>
              </td>
              <td class="bg-light-gray"></td>
              <td>
                <span class="bg-earth activity-name">Полдник</span>
                <div class="activity-time">
                  Скидка 20% на Гарниры и дессерты
                </div>
              </td>
              <td class="bg-light-gray"></td>
              <td class="bg-light-gray"></td>
              <td class="bg-light-gray"></td>
            </tr>

            <tr>
              <td class="align-middle">18:00 - 20:00</td>
              <td class="bg-light-gray"></td>
              <td class="bg-light-gray"></td>
              <td class="bg-light-gray"></td>
              <td class="bg-light-gray"></td>
              <td>
                <span class="bg-green activity-name">Ужин</span>
                <div class="activity-time">Скидка 15%</div>
              </td>
              <td>
                <span class="bg-green activity-name">Ужин</span>
                <div class="activity-time">Скидка 15%</div>
              </td>
              <td>
                <span class="bg-green activity-name">Ужин</span>
                <div class="activity-time">Скидка 15%</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="promotions-item">
      <div class="content-box">
        <img src="../assets/images/borshhome.jpg" alt="" />
      </div>

      <div class="description">
        <h3>Суп скидкой до 50%</h3>
        <ul>
          <li>
            <p>При заказе более трех порций</p>
          </li>
          <li>
            <p>Только вечер выходного дня</p>
          </li>
          <li>
            <p>Только онлайн оплата</p>
          </li>
        </ul>
        <router-link @click="scrollToTop()" to="/menu" class="btn">Заказать</router-link>
      </div>
    </div>

    <div class="promotions-item">
      <div class="content-box">
        <img src="../assets/images/cezarhome.jpg" alt="" />
      </div>

      <div class="description">
        <h3>Счастливый обед со скидкой до 25%</h3>
        <ul>
          <li>
            <p>Салаты со скидкой 25%</p>
          </li>
          <li>
            <p>Только в обед с 11:00 до 14:00</p>
          </li>
          <li>
            <p>Только доставка</p>
          </li>
        </ul>
        <router-link @click="scrollToTop()" to="/menu" class="btn">Заказать</router-link>
      </div>
    </div>

    <div class="promotions-item">
      <div class="content-box">
        <img src="../assets/images/chaihome.jpg" alt="" />
      </div>

      <div class="description">
        <h3>Новый напиток 100% Кэшбэк</h3>
        <ul>
          <li>
            <p>Бесплатный напитоу, если общий счет превышает 1500 рублей.</p>
          </li>
          <li>
            <p>С 23.05.2023 по 12.06.2023</p>
          </li>
          <li>
            <p>Только при оплате онлайн</p>
          </li>
        </ul>
        <router-link @click="scrollToTop()" to="/menu" class="btn">Заказать</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promo",

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.promotions {
  padding: 2rem 9%;
}

.promotions .promotions-item {
  width: 70%;
  margin-bottom: 20px;
  position: relative;
  display: flex;
}

/* Table */
.activity-name {
  padding: 5px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
}

.activity-time {
  margin-top: 10px;
  font-size: 12px;
}

.bg-light-gray {
  background-color: #f7f7f7;
}

.table-bordered thead td,
.table-bordered thead th {
  border-bottom-width: 2px;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}

.bg-green {
  background-color: #76ba99;
  color: white;
}

.bg-brown {
  background-color: #876445;
  color: white;
}

.bg-beige {
  background-color: #ca955c;
  color: white;
}

.bg-earth {
  background-color: #eddfb3;
  color: white;
}

.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

/* banner */
.promotions .promotions-item .content-box {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  height: 30rem;
  max-width: 25%;
}

.promotions .promotions-item .content-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promotions .promotions-item .description {
  position: relative;
  margin-left: 50px;
}

.promotions .promotions-item .description h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #27ae60;
}

.promotions .promotions-item .description ul {
  margin-left: 40px;
}

.promotions .promotions-item .description li {
  margin-bottom: 30px;
}

.promotions .promotions-item .description p {
  font-size: 20px;
}

.promotions .promotions-item .description .btn {
  position: absolute;
  bottom: 0;
  left: 0;
}

@media (max-width: 768px) {

  .bg-green,
  .bg-brown,
  .bg-beige,
  .bg-earth {
    padding: 5px 0px;
    background-color: inherit;
    text-align: center;
  }

  .bg-green {
    color: #76ba99;
  }

  .bg-brown {
    color: #876445;
  }

  .bg-beige {
    color: #ca955c;
  }

  .bg-earth {
    color: #eddfb3;
  }

  .promotions .promotions-item .content-box {
    max-width: 30%;
  }

  .promotions .promotions-item .content-box img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .promotions .promotions-item .description h3 {
    font-size: 22px;
  }

  .promotions .promotions-item .description p {
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .activity-name {
    font-size: 10px;
  }

  .activity-time {
    font-size: 8px;
  }

  .promotions .promotions-item .content-box {
    position: absolute;
    z-index: -1;
    opacity: 0.8;
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    filter: brightness(40%);
  }

  .promotions .promotions-item .description {
    margin: 0;
    margin-left: 10px;
  }

  .promotions .promotions-item .description h3 {
    font-size: 14px;
    font-weight: 700;
    filter: brightness(150%);
  }

  .promotions .promotions-item .description p {
    font-size: 12px;
    color: white;
    font-weight: 500;
  }

  .promotions .promotions-item .description ul {
    margin-left: 10px;
    margin-bottom: 50px;
    list-style-type: none;
  }

  .promotions .promotions-item .description li {
    margin-bottom: 10px;
  }
}
</style>
