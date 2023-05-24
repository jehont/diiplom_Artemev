<template>
  <div class="admin-container">
    <div class="d-flex justify-content-between">
      <h1>Приветствую администратора</h1>
      <button class="btn" @click="handleLogout()">Выйти</button>
    </div>

    <div class="table-responsive">
      <!-- PROJECT TABLE -->
      <table class="table colored-header datatable project-list">
        <thead>
          <tr>
            <th>Идентификатор счета</th>
            <th>Номер пользователя </th>
            <th>Телефон</th>
            <th>Адрес</th>
            <th>Время заказа</th>
            <th>Оплата</th>
            <th>Сумма</th>
            <th>Статус</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="b in filterBills.slice().reverse()" :key="b.bill_id">
            <td>{{ b.bill_id }}</td>
            <td>{{ b.user_id }}</td>
            <td>{{ b.bill_phone }}</td>
            <td>{{ b.bill_address }}</td>
            <td>{{ b.bill_when }}</td>
            <td>{{ b.bill_paid }}</td>
            <td>₽{{ b.bill_total }}</td>
            <td>{{ avaiableStatus[b.bill_status] }}</td>
            <td>
              <button v-if="b.bill_status < 5" class="action-btn" @click="nextStatusBtn(b.bill_id)">
                {{ avaiableStatus[b.bill_status + 1] }}
              </button>

              <button v-if="b.bill_status == 1" class="cancel-btn" @click="cancelBtn(b.bill_id)">
                Отмена
              </button>

              <button v-else-if="b.bill_status == 5 && b.bill_paid == 'false'" class="paid-btn"
                @click="paidBtn(b.bill_id)">
                оплачено
              </button>


              <button v-else-if="b.bill_status == 5 && b.bill_paid == 'true'" class="action-btn"
                @click="nextStatusBtn(b.bill_id)">
                {{ avaiableStatus[b.bill_status + 1] }}
              </button>

              <button class="details-btn" @click="sendBillId(b.bill_id)">Детали заказа</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <OrderDetails v-if="showOrderDetails" :bill="sendId">
        <button class="btn" @click="closeView">X</button>
      </OrderDetails>
    </div>
    <div class="table-responsive">
      <!-- PROJECT TABLE -->
      <table class="table colored-header datatable project-list">
        <thead>
          <tr>
            <th>Индификатор заказа</th>
            <th>Имя пользователя</th>
            <th>Телефон пользователя</th>
            <th>Количество человек</th>
            <th>Количество столов</th>
            <th>Номер пользователя</th>
            <th>Дата</th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in allTableBookings.slice()" :key="t.book_id">
            <td>{{ t.book_id }}</td>
            <td>{{ t.book_name }}</td>
            <td>{{ t.book_phone }}</td>
            <td>{{ t.book_people }}</td>
            <td>{{ t.book_tables }}</td>
            <td>{{ t.user_id }}</td>
            <td>{{ t.book_when }}</td>
            <td>{{ t.book_note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import OrderDetails from "@/components/OrderDetails.vue";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Dashboard",

  data() {
    return {
      avaiableStatus: [
        "Отменен",
        "Подтвержден",
        "Готовится",
        "Проверяется",
        "Едет к вам",
        "Доставлено",
        "Завершен",
      ],
      allBills: [],
      allTableBookings: [],
      showOrderDetails: false,
      sendId: undefined,
      interval: "",
    };
  },

  created() {
    this.getAllBills();
    this.getAllTableBookings();
    if (!this.admin) {
      this.$router.push("/");
    }
  },

  mounted: function () {
    this.autoUpdate();
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  computed: {
    ...mapState(["allFoods", "admin"]),

    filterBills: function () {
      return this.allBills.filter(
        (b) => b.bill_status < 6 && b.bill_status > 0
      );
    },

  },

  methods: {
    ...mapMutations(["setAdmin"]),

    async getAllBills() {
      this.allBills = (await axios.get("/billstatus")).data;
    },

    async getAllTableBookings() {
      this.allTableBookings = (await axios.get("/booktable")).data;
    },


    sendBillId: function (id) {
      this.sendId = id;
      this.showOrderDetails = !this.showOrderDetails;
    },

    sendBilluserId: function (user_id) {
      this.sendId = user_id;
      this.showOrderDetails = !this.showOrderDetails;
    },

    closeView: function () {
      this.showOrderDetails = !this.showOrderDetails;
    },

    handleLogout: function () {
      this.setAdmin("");
    },

    async nextStatusBtn(id) {
      await axios.put("/billstatus/" + id);
      this.getAllBills();
    },

    async paidBtn(id) {
      await axios.put("/billstatus/paid/" + id);
      this.getAllBills();
    },

    async cancelBtn(id) {
      await axios.put("/billstatus/cancel/" + id);
      this.getAllBills();
    },

    autoUpdate: function () {
      this.interval = setInterval(
        function () {
          this.getAllBills();
          this.getAllTableBookings();
          console.log(this.allTableBookings);
        }.bind(this),
        1000
      );
    },
  },
  components: { OrderDetails }
};
</script>

<style scoped>
.admin-container {
  background-color: #fff;
  height: 100vh;
  padding: 2rem 9%;
  font-size: 16px;
}

.project-list>tbody>tr>td {
  padding: 12px 8px;
}

.project-list>tbody>tr>td .avatar {
  width: 22px;
  border: 1px solid #ccc;
}

.table-responsive {
  margin-top: 8vh;
}

.action-btn,
.cancel-btn,
.paid-btn {
  width: 100px;
  height: 25px;
  color: white;
}

.action-btn {
  background-color: #0da9ef;
  margin-right: 10px;
}

.cancel-btn,
.paid-btn {
  background-color: red;
}

.action-btn:hover {
  background-color: #27ae60;
}

.details-btn {
  background-color: #0db60d;
  margin-left: 10px;
  padding: 2px;
}
</style>

