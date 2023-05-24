// import функции из модели User

import {
    getAllItems,
    getAItem,
    insertToCart,
    updateCartItemQty,
    deleteItemInCart,
    deleteAllItemsByUser
} from "../models/CartModel.js";

// get all
export const allItems=(req,res)=>{
    getAllItems(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get один
export const getItem=(req,res)=>{
    const user_id = req.params.user_id;
    const food_id = req.params.food_id;
    getAItem(user_id,food_id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// добавить в корзину
export const addItems=(req,res)=>{
    const data = req.body;
    insertToCart(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// обновить
export const updateItem=(req,res)=>{
    const data = req.body;
    updateCartItemQty(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// удалить блюдо из корзины
export const deleteItem=(req,res)=>{
    const user_id = req.params.user_id;
    const food_id = req.params.food_id;
    deleteItemInCart(user_id,food_id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// удалить все блюда их корзины
export const deleteItems=(req,res)=>{
    deleteAllItemsByUser(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
