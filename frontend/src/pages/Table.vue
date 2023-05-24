<template>
  <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
  <section class="order-section">
    <div class="heading">
      <span>Заказать стол</span>
      <h3>Наслаждайтесь моментом</h3>
    </div>

    <div class="icons-container">
      <div class="icons">
        <img src="../assets/images/icon-1.png" alt="" />
        <h3>с 9:00 до 22:00</h3>
      </div>

      <div class="icons">
        <img src="../assets/images/icon-2.png" alt="" />
        <h3>+7 963 777 7777</h3>
      </div>

      <div class="icons">
        <img src="../assets/images/icon-3.png" alt="" />
        <h3>Удмуртский государственный университет,</h3>
        <h3>корпус 1</h3>
      </div>
    </div>

    <!-- booking form -->
    <form id="bookTableForm" @submit="handleSubmit" novalidate autocomplete="off">
      <div class="row">
        <div class="input-box">
          <label for="uName">Ваше имя</label>
          <input type="text" name="uName" id="uName" v-model="orderObj.name" />
          <p v-if="errorObj.nameErr.length > 0">{{ errorObj.nameErr[0] }}</p>
        </div>
        <div class="input-box">
          <label for="uPhone">Ваш номер телефона</label>
          <input type="text" name="uPhone" id="uPhone" v-model="orderObj.phone" />
          <p v-if="errorObj.phoneErr.length > 0">{{ errorObj.phoneErr[0] }}</p>
        </div>
      </div>

      <div class="row">
        <div class="input-box">
          <label for="oPeople">Сколько персон</label>
          <input type="number" name="oPeople" id="oPeople" v-model="orderObj.people" />
          <p v-if="errorObj.peopleErr.length > 0">
            {{ errorObj.peopleErr[0] }}
          </p>
        </div>
        <div class="input-box">
          <label for="oTables">Сколько столов</label>
          <input type="number" name="oTables" id="oTables" v-model="orderObj.tables" />
          <p v-if="errorObj.tablesErr.length > 0">
            {{ errorObj.tablesErr[0] }}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="input-box">
          <label for="uCard">Номер карты посетителя</label>
          <input type="text" name="uCard" id="uCard" v-model="orderObj.card" />
          <p v-if="errorObj.cardErr.length > 0">{{ errorObj.cardErr[0] }}</p>
        </div>
        <div class="input-box">
          <label for="oWhen">Дата и Время</label>
          <input type="datetime-local" name="oWhen" id="oWhen" v-model="orderObj.when" @click="availableTime()" />
          <p v-if="errorObj.whenErr.length > 0">{{ errorObj.whenErr[0] }}</p>
        </div>
      </div>

      <div class="row">
        <div class="input-box">
          <label for="uMessage">Комментарий</label>
          <textarea placeholder="Тут вы можете написать свои пожелания" name="uMessage" id="uMessage" cols="30" rows="10"
            v-model="orderObj.note"></textarea>
        </div>
        <div class="input-box">
          <iframe class="map"
            src="https://yandex.ru/map-widget/v1/?ll=53.225522,56.850802&mode=search&oid=1752857933&ol=biz&z=17.01"
            loading="lazy"></iframe>
        </div>
      </div>

      <input type="submit" value="Забронировать" class="btn" />
    </form>
  </section>
</template>

<script>
import axios from "axios";
import VueBasicAlert from "vue-basic-alert";
export default {
  name: "Table",

  data() {
    return {
      orderObj: {
        name: "",
        phone: "",
        people: "",
        tables: "",
        card: "",
        when: "",
        note: "",
      },
      errorObj: {
        nameErr: [],
        phoneErr: [],
        peopleErr: [],
        tablesErr: [],
        cardErr: [],
        whenErr: [],
      },
    };
  },

  methods: {
    availableTime: function () {
      var now = new Date();
      var day = ("0" + now.getDate()).slice(-2);
      var currentMonth = ("0" + (now.getMonth() + 1)).slice(-2);
      var maxMonth = ("0" + (now.getMonth() + 3)).slice(-2);
      var hour = ("0" + now.getHours()).slice(-2);
      var min = ("0" + now.getMinutes()).slice(-2);
      var minRange =
        now.getFullYear() +
        "-" +
        currentMonth +
        "-" +
        day +
        " " +
        hour +
        ":" +
        min;
      var maxRange =
        now.getFullYear() + "-" + maxMonth + "-" + day + " " + hour + ":" + min;

      document.getElementById("oWhen").setAttribute("min", minRange);
      document.getElementById("oWhen").setAttribute("max", maxRange);
    },

    resetCheckErr: function () {
      this.errorObj.nameErr = [];
      this.errorObj.phoneErr = [];
      this.errorObj.peopleErr = [];
      this.errorObj.tablesErr = [];
      this.errorObj.cardErr = [];
      this.errorObj.whenErr = [];
    },

    checkEmptyErr: function () {
      for (var typeErr in this.errorObj) {
        if (this.errorObj[typeErr].length != 0) {
          return false;
        }
      }
      return true;
    },

    checkForm: function () {
      this.resetCheckErr();

      // Name validate
      if (!this.orderObj.name) {
        this.errorObj.nameErr.push("Требуется ввести имя");
      } else {
        if (!/^[А-Яа-я]+$/.test(this.orderObj.name.replace(/\s/g, ""))) {
          this.errorObj.nameErr.push("Имя может содержать только буквы");
        }
      }

      // Phone validate
      if (!this.orderObj.phone) {
        this.errorObj.phoneErr.push("Ввод номера телефона обязателен");
      } else {
        if (!this.orderObj.phone.startsWith("7")) {
          this.errorObj.phoneErr.push("Номер телефона должен начинаться с 7");
        }

        if (!/[0-9]{10}/.test(this.orderObj.phone)) {
          this.errorObj.phoneErr.push("Номера телефонов могут содержать только цифры");
        }

        if (this.orderObj.phone.length != 11) {
          this.errorObj.phoneErr.push(
            "Номера телефонов должны состоять ровно из 11 цифр."
          );
        }
      }

      if (!this.orderObj.people) {
        this.errorObj.peopleErr.push("Необходимо ввести количество человек");
      } else {
        if (parseInt(this.orderObj.people) > 100) {
          this.errorObj.peopleErr.push(
            "Мы можем обслуживать максимум 100 человек"
          );
        }

        if (parseInt(this.orderObj.people) < 1) {
          this.errorObj.peopleErr.push(
            "Количество людей должно быть больше или равно 1"
          );
        }
      }

      if (!this.orderObj.tables) {
        this.errorObj.tablesErr.push("Требуется ввести количество столов");
      } else {
        if (parseInt(this.orderObj.tables) > 50) {
          this.errorObj.tablesErr.push(
            "В каждом магазине может быть максимум 50 столов."
          );
        }

        if (parseInt(this.orderObj.tables) < 1) {
          this.errorObj.tablesErr.push(
            "Количество столов должно быть больше или равно 1"
          );
        }

        if (parseInt(this.orderObj.people) < parseInt(this.orderObj.tables)) {
          this.errorObj.tablesErr.push(
            "Количество столов должно быть меньше количества человек"
          );
        }
      }

      if (this.orderObj.card) {
        if (!/[0-9]{10}/.test(this.orderObj.card)) {
          this.errorObj.cardErr.push("Номера карт могут содержать только цифры");
        }

        if (this.orderObj.card.length != 10) {
          this.errorObj.cardErr.push("Номер карты должен состоять ровно из 10 цифр.");
        }
      }

      if (!this.orderObj.when) {
        this.errorObj.whenErr.push("Требуется указать дату и время");
      } else {
        let minRange = document.getElementById("oWhen").getAttribute("min");
        let maxRange = document.getElementById("oWhen").getAttribute("max");
        let dateMin = new Date(minRange);
        let dateMax = new Date(maxRange);
        let dateInput = new Date(this.orderObj.when);

        if (dateInput === "Неправильная дата") {
          this.errorObj.whenErr.push("Неправильная дата");
        }

        if (
          dateInput.getTime() < dateMin.getTime() ||
          dateInput.getTime() > dateMax.getTime()
        ) {
          this.errorObj.whenErr.push(
            "Доступный диапазон резервирования от настоящего момента до следующих двух месяцев."
          );
        }

        if (dateInput.getHours() < 9 || dateInput.getHours() > 22) {
          this.errorObj.whenErr.push(
            "Ресторан открыт с 9:00 до 22:00"
          );
        }
      }
    },

    async handleSubmit(e) {
      this.checkForm();

      if (!this.checkEmptyErr()) {
        e.preventDefault();
      } else {
        e.preventDefault();

        let data = {
          book_name: this.orderObj.name,
          book_phone: parseInt(this.orderObj.phone),
          book_people: parseInt(this.orderObj.people),
          book_tables: parseInt(this.orderObj.tables),
          user_id: parseInt(this.orderObj.card),
          book_when: this.orderObj.when,
          book_note: this.orderObj.note,
        };

        await axios.post("/booking", data);

        this.$refs.alert.showAlert(
          "Успешно",
          "Спасибо! Мы перезвоним вам в ближайшее время, чтобы подтвердить ваш заказ",
          "Бронирование успешно!"
        );
        document.getElementById("bookTableForm").reset();
      }
    },
  },

  components: {
    VueBasicAlert,
  },
};
</script>

<style scoped>
.order-section {
  padding: 2rem 9%;
}

.order-section .icons-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.order-section .icons-container .icons {
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  background: #f7f7f7;
}

.order-section .icons-container .icons img {
  height: 10rem;
}

.order-section .icons-container .icons h3 {
  font-size: 2rem;
  color: #130f40;
  margin-top: 0.5rem;
}

.order-section form {
  background: #f7f7f7;
  padding: 2rem;
  border-radius: 0.5rem;
}

.order-section form .row {
  justify-content: space-between;
}

.order-section form .row .input-box {
  width: 49%;
  padding: 1.8rem 0;
}

.order-section form .row label {
  font-size: 1.7rem;
  color: #666;
}

.order-section form .row p {
  font-size: 1.5rem;
  position: absolute;
  color: rgb(243, 47, 47);
  margin: 0;
  padding-top: 5px;
}

.order-section form .row input,
.order-section form .row textarea {
  width: 100%;
  margin-top: 0.5rem;
  padding: 1rem 1.2rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  text-transform: none;
  color: #130f40;
}

.order-section form .row textarea {
  height: 20rem;
  resize: none;
}

.order-section form .row .map {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .order form .row .input-box {
    width: 100%;
  }

  .order-section form .row {
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 0;
  }

  .order-section form .row .input-box {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .order-section .icons-container {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
}
</style>
