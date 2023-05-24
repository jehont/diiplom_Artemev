<template>
  <div class="footer">
    <div class="news-letter">
      <h3>Получать уведомления</h3>
      <form onsubmit="event.preventDefault();">
        <input type="email" name="useremailreceiveinfo" placeholder="Введите ваш email" id="useremailreceiveinfo" />
        <input type="submit" value="подписаться" />
      </form>
    </div>

    <div class="box-container">
      <div class="box">
        <h3>Наше меню</h3>
        <router-link @click="scrollToTop()" to="/menu"><i class="fas fa-arrow-right"></i> Супы</router-link>
        <router-link @click="scrollToTop()" to="/menu"><i class="fas fa-arrow-right"></i> Салаты</router-link>
        <router-link @click="scrollToTop()" to="/menu"><i class="fas fa-arrow-right"></i> Мясо & рыба</router-link>
        <router-link @click="scrollToTop()" to="/menu"><i class="fas fa-arrow-right"></i> Гарниры
        </router-link>
        <router-link @click="scrollToTop()" to="/menu"><i class="fas fa-arrow-right"></i> Десерты</router-link>
        <router-link @click="scrollToTop()" to="/menu"><i class="fas fa-arrow-right"></i> Напитки</router-link>
      </div>

      <div class="box">
        <h3>Быстрые ссылки</h3>
        <router-link @click="scrollToTop()" to="/">
          <i class="fas fa-arrow-right"></i> Главная страница</router-link>
        <router-link @click="scrollToTop()" to="/about">
          <i class="fas fa-arrow-right"></i> О нас</router-link>
        <router-link @click="scrollToTop()" to="/promotions">
          <i class="fas fa-arrow-right"></i> Акции
        </router-link>
        <router-link @click="scrollToTop()" to="/menu">
          <i class="fas fa-arrow-right"></i> Меню</router-link>
        <router-link @click="scrollToTop()" to="/table">
          <i class="fas fa-arrow-right"></i> Забронировать стол
        </router-link>
      </div>

      <div class="box">
        <h3>Дополнительные ссылки</h3>
        <div v-if="user">
          <router-link @click="scrollToTop()" to="/cart">
            <i class="fas fa-arrow-right"></i> Мой заказ
          </router-link>
          <router-link @click="scrollToTop()" to="/myorder">
            <i class="fas fa-arrow-right"></i> Мои заказы
          </router-link>
        </div>
        <div v-else>
          <router-link @click="scrollToTop()" to="/login">
            <i class="fas fa-arrow-right"></i> Войти
          </router-link>
          <router-link @click="scrollToTop()" to="/register">
            <i class="fas fa-arrow-right"></i> Зарегистрироваться
          </router-link>
        </div>
      </div>

      <div class="box">
        <h3>Часы работы</h3>
        <p>Ежедневно с 9:00 до 22:00</p>
      </div>
    </div>

    <div class="bottom">
      <div class="share">
        <a href="https://vk.com/it_king" class=""></a>
        <a href="https://twitter.com/?lang=en" class=""></a>
        <a href="https://www.instagram.com/" class=""></a>
        <a href="https://www.pinterest.com/" class=""></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FooterComponent",

  computed: {
    ...mapState(["user"]),
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
/* footer */
.footer {
  background: #f7f7f7;
  padding: 2rem 9%;
}

.footer .news-letter {
  text-align: center;
  margin-bottom: 2rem;
}

.footer .news-letter h3 {
  font-size: 2.5rem;
  color: #130f40;
  padding-bottom: 1rem;
}

.footer .news-letter form {
  max-width: 70rem;
  margin: 1rem auto;
  max-width: 70rem;

  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
}

.footer .news-letter form input[type="email"] {
  height: 100%;
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1.6rem;
  color: #130f40;
  text-transform: none;
}

.footer .news-letter form input[type="submit"] {
  padding: 0 2rem;
  font-size: 1.6rem;
  color: #fff;
  background: #27ae60;
  cursor: pointer;
}

.footer .news-letter form input[type="submit"]:hover {
  background: #130f40;
}

.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
}

.footer .box-container .box h3 {
  font-size: 2.2rem;
  color: #130f40;
  padding: 1rem 0;
}

.footer .box-container .box p {
  font-size: 1.4rem;
  color: #666;
  padding: 1rem 0;
}

.footer .box-container .box a {
  display: block;
  font-size: 1.4rem;
  color: #666;
  padding: 1rem 0;
}

.footer .box-container .box a:hover {
  color: #27ae60;
}

.footer .box-container .box a:hover i {
  padding-right: 2rem;
}

.footer .box-container .box a i {
  padding-right: 0.5rem;
  color: #27ae60;
}

.footer .bottom {
  padding-top: 1rem;
  text-align: center;
}

.footer .bottom .share {
  margin: 1.5rem 0;
}

.footer .bottom .share a {
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  margin: 0 0.3rem;
  color: #fff;
  background: #27ae60;
}

.footer .bottom .share a:hover {
  background: #130f40;
}

@media (max-width: 576px) {
  .footer .box-container {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
}
</style>
