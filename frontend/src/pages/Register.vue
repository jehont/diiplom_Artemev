<template>
  <div class="register-container">
    <div class="register-form-container">
      <form
        id="registerForm"
        @submit="handleSubmit"
        novalidate
        autocomplete="off"
      >
        <h3>Создание аккаунта</h3>
        <div class="form-group">
          <label for="uName">Введите ваше имя: </label>
          <input
            type="text"
            name="uName"
            placeholder="ваше полное имя"
            id="uName"
            class="form-control"
            v-model="registerObj.name"
          />
          <p class="error-mess" v-if="errorObj.nameErr.length > 0">
            {{ errorObj.nameErr[0] }}
          </p>
        </div>

        <div class="form-group">
          <label for="uEmail">Введите ваш email: </label>
          <input
            type="email"
            name="uEmail"
            placeholder="example@mail.ru"
            id="uEmail"
            class="form-control"
            v-model="registerObj.email"
          />
          <p class="error-mess" v-if="errorObj.emailErr.length > 0">
            {{ errorObj.emailErr[0] }}
          </p>
        </div>

        <div class="form-group">
          <label for="uPass">Введите пароль: </label>
          <input
            type="password"
            name="uPass"
            placeholder="введите пароль"
            id="uPass"
            class="form-control"
            v-model="registerObj.pass"
          />
          <p class="error-mess" v-if="errorObj.passErr.length > 0">
            {{ errorObj.passErr[0] }}
          </p>
        </div>

        <div class="form-group">
          <label for="uPassConfirm">Подтвердите пароль: </label>
          <input
            type="password"
            name="uPassConfirm"
            placeholder="подтвердите пароль"
            id="uPassConfirm"
            class="form-control"
            v-model="registerObj.confirm"
          />
          <p class="error-mess" v-if="errorObj.confirmErr.length > 0">
            {{ errorObj.confirmErr[0] }}
          </p>
        </div>

        <div class="form-group">
          <label for="uPhone">Введите ваш номер телефона: </label>
          <input
            type="tel"
            name="uPhone"
            placeholder="введите ваш номер"
            id="uPhone"
            class="form-control"
            v-model="registerObj.phone"
          />
          <p class="error-mess" v-if="errorObj.phoneErr.length > 0">
            {{ errorObj.phoneErr[0] }}
          </p>
        </div>

        <div class="form-group">
          <label for="uBirth">Ваша дата рождения: </label>
          <input
            type="date"
            name="uBirth"
            id="uBirth"
            class="form-control"
            @click="availableTime()"
            v-model="registerObj.birth"
          />
          <p class="error-mess" v-if="errorObj.birthErr.length > 0">
            {{ errorObj.birthErr[0] }}
          </p>
        </div>

        <div class="form-group">
          <label for="">Введите ваш пол: </label>
          <div class="form-group">
            <input
              type="radio"
              name="gender"
              value="male"
              id="genderMale"
              v-model="registerObj.gender"
            /><span>Мужской</span>
            <input
              type="radio"
              name="gender"
              value="female"
              id="genderFemale"
              v-model="registerObj.gender"
            /><span>Женский</span>
          </div>
          <p class="error-mess" v-if="errorObj.genderErr.length > 0">
            {{ errorObj.genderErr[0] }}
          </p>
        </div>

        <div class="form-group">
          <input type="submit" value="Зарегистрироваться" class="btn" />
          <p>
            уже есть аккаунт?
            <router-link @click="scrollToTop()" to="/login">войти</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",

  data() {
    return {
      registerObj: {
        name: "",
        email: "",
        pass: "",
        confirm: "",
        phone: "",
        birth: "",
        gender: "",
      },
      errorObj: {
        nameErr: [],
        emailErr: [],
        passErr: [],
        confirmErr: [],
        phoneErr: [],
        birthErr: [],
        genderErr: [],
      },
      matchUser: undefined,
    };
  },

  methods: {
    async getMatchUser(email) {
      let data = await axios.get("/users/" + email);
      this.matchUser = data.data;
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    availableTime: function () {
      var now = new Date();
      var day = ("0" + now.getDate()).slice(-2);
      var currentMonth = ("0" + (now.getMonth() + 1)).slice(-2);
      var minRange = now.getFullYear() - 150 + "-" + currentMonth + "-" + day;
      var maxRange = now.getFullYear() + "-" + currentMonth + "-" + day;

      document.getElementById("uBirth").setAttribute("min", minRange);
      document.getElementById("uBirth").setAttribute("max", maxRange);
    },

    resetCheckErr: function () {
      this.errorObj.nameErr = [];
      this.errorObj.emailErr = [];
      this.errorObj.passErr = [];
      this.errorObj.confirmErr = [];
      this.errorObj.phoneErr = [];
      this.errorObj.birthErr = [];
      this.errorObj.genderErr = [];
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
      if (!this.registerObj.name) {
        this.errorObj.nameErr.push("Требуется ввести имя");
      } else {
        if (!/^[A-яа-я]+$/.test(this.registerObj.name.replace(/\s/g, ""))) {
          this.errorObj.nameErr.push("Имя может содержать только буквы");
        }
      }

      // Email validate
      if (!this.registerObj.email) {
        this.errorObj.emailErr.push("Требуется ввод электронной почты");
      } else {
        if (
          !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(
            this.registerObj.email
          )
        ) {
          this.errorObj.emailErr.push("Электронная почта должна быть действительной");
        }
      }

      // Pass validate
      if (!this.registerObj.pass) {
        this.errorObj.passErr.push("Необходим пароль");
      } else {
        if (!/[!@#$%^&*]/.test(this.registerObj.pass)) {
          this.errorObj.passErr.push(
            "Пароль должен содержать не менее 1 специального символа"
          );
        }

        if (this.registerObj.pass.length < 8) {
          this.errorObj.passErr.push(
            "Пароль должен быть больше или равен 8 символам"
          );
        }
      }

      // Confirm Pass validate
      if (!this.registerObj.confirm) {
        this.errorObj.confirmErr.push("Требуется подтверждение пароля");
      } else {
        if (this.registerObj.pass !== this.registerObj.confirm) {
          this.errorObj.confirmErr.push(
            "Пароли должны совпадать"
          );
        }
      }

      // Phone validate
      if (!this.registerObj.phone) {
        this.errorObj.phoneErr.push("Ввод номера телефона обязателен");
      } else {
        if (!this.registerObj.phone.startsWith("7")) {
          this.errorObj.phoneErr.push("Номер телефона должен начинаться с 7");
        }

        if (this.registerObj.phone.length != 11) {
          this.errorObj.phoneErr.push(
            "Номера телефонов должны состоять ровно из 11 цифр."
          );
        }

        if (!/[0-9]{11}/.test(this.registerObj.phone)) {
          this.errorObj.phoneErr.push("Номера телефонов могут содержать только цифры");
        }
      }

      // Birth validate
      if (!this.registerObj.birth) {
        this.errorObj.birthErr.push("Укажите дату рождения");
      } else {
        let minRange = document.getElementById("uBirth").getAttribute("min");
        let maxRange = document.getElementById("uBirth").getAttribute("max");
        let dateMin = new Date(minRange);
        let dateMax = new Date(maxRange);
        let dateInput = new Date(this.registerObj.birth);

        if (dateInput === "Invalid Date") {
          this.errorObj.birthErr.push("Неверный ввод даты");
        }

        if (
          dateInput.getTime() < dateMin.getTime() ||
          dateInput.getTime() > dateMax.getTime()
        ) {
          this.errorObj.birthErr.push(
            "Доступный диапазон дней рождения: от 150 лет до настоящего времени."
          );
        }
      }

      // Gender validate
      if (!this.registerObj.gender) {
        this.errorObj.genderErr.push("Пожалуйста, выберите пол");
      }
    },

    async handleSubmit(e) {
      this.checkForm();

      if (!this.checkEmptyErr()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        await this.getMatchUser(this.registerObj.email);
        if (this.matchUser) {
          this.errorObj.emailErr.push("Аккаунт уже существует");
        } else {
          let data = {
            user_name: this.registerObj.name,
            user_email: this.registerObj.email,
            user_phone: this.registerObj.phone,
            user_password: this.registerObj.pass,
            user_birth: this.registerObj.birth,
            user_gender: this.registerObj.gender,
          };
          await axios.post("/users/", data);
          this.$router.push("/login");
        }
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  padding: 2rem 9%;
}

.register-container .register-form-container {
  background: #fff;
}

.register-container .register-form-container form {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 70rem;
  width: 100%;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 0.5rem;
  animation: fadeUp 0.4s linear;
}

.register-container .register-form-container form h3 {
  padding-bottom: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
  color: #130f40;
  margin: 0;
}

.register-container .register-form-container form .form-control {
  margin: 0.7rem 0;
  border-radius: 0.5rem;
  background: #f7f7f7;
  padding: 2rem 1.2rem;
  font-size: 1.6rem;
  color: #130f40;
  text-transform: none;
  width: 100%;
  border: none;
}

.register-container .register-form-container form label {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}

.register-container .register-form-container form span {
  font-size: 18px;
  padding-left: 5px;
  padding-right: 40px;
}

.register-container .register-form-container form .btn {
  margin: 1rem 0;
  width: 100%;
  text-align: center;
}

.register-container .register-form-container form p {
  padding-top: 1rem;
  font-size: 1.5rem;
  color: #666;
  margin: 0;
}

.register-container .register-form-container form p a {
  color: #27ae60;
}

.register-container .register-form-container form p a:hover {
  color: #130f40;
  text-decoration: underline;
}

.register-container .register-form-container form .form-group {
  margin: 0;
}

.register-container .register-form-container form .form-group .error-mess {
  font-size: 1.5rem;
  position: relative;
  color: rgb(243, 47, 47);
  margin: 0;
  padding: 0;
}
</style>
