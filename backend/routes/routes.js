// import express 
import express from "express";
// import функций из controller 
import {
    showFoods,
    showFoodById,
    createFood,
    updateFood,
    deleteFood,
} from "../controllers/food.js";

import {
    showAUser,
    createAccount
} from "../controllers/user.js";

import {
    addItems,
    getItem,
    updateItem,
    allItems,
    deleteItem,
    deleteItems
} from "../controllers/cart.js";

import {
    createBooking,
    getAllTableBookings
} from "../controllers/booktable.js";

import {
    createBillDetails,getBillDetailsById
} from "../controllers/billdetails.js";

import {
    showNewestStatusId,
    createBillStatus, 
    getAllBillsByUser,
    getAllBillsByBill,
    getAllBills,
    updateBillStatus,
    updateBillPaid,
    cancelBillStatus
} from "../controllers/billstatus.js";

// init express router
const router = express.Router();

////////////////////////// Блюда ////////////////////////////////
// get all Блюда
router.get("/api/foods", showFoods);

// get single Блюдо 
router.get("/api/foods/:id", showFoodById);

// create Блюдо
router.post("/api/foods", createFood);

// update Блюдо 
router.put("/api/foods/:id", updateFood);

// delete Блюдо
router.delete("/api/foods/:id", deleteFood);



////////////////////////// Пользователь ////////////////////////////////
// get all Пользователь
router.get("/api/users/:email", showAUser);

// create аккаунт
router.post("/api/users/", createAccount);



////////////////////////// Корзина ////////////////////////////////
// add to Корзина
router.post("/api/cartItem", addItems);

// get a item in Корзина
router.get("/api/cartItem/:user_id/:food_id", getItem);

// get все предметы по id пользователя
router.get("/api/cartItem/:id", allItems);

// обновить количество товара
router.put("/api/cartItem/", updateItem);

// delete предмет в корзине
router.delete("/api/cartItem/:user_id/:food_id", deleteItem);

// delete все из корзины
router.delete("/api/cartItem/:id", deleteItems);



////////////////////////// Бронироование ////////////////////////////////
router.post("/api/booking", createBooking);
router.get("/api/booktable", getAllTableBookings);



////////////////////////// Сведения о заказе ////////////////////////////////
router.post("/api/billdetails", createBillDetails);
router.get("/api/billdetails/:id", getBillDetailsById);



////////////////////////// статус заказа ////////////////////////////////
router.get("/api/billstatus/new", showNewestStatusId);
router.post("/api/billstatus", createBillStatus);
router.get("/api/billstatus/user/:id", getAllBillsByUser);
router.get("/api/billstatus/bill/:id", getAllBillsByBill);
router.get("/api/billstatus", getAllBills);
router.put("/api/billstatus/:id", updateBillStatus);
router.put("/api/billstatus/paid/:id", updateBillPaid);
router.put("/api/billstatus/cancel/:id", cancelBillStatus);





// export default router
export default router;







