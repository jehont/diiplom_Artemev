// import connection
import db from "../config/database.js";

// get всего из user id
export const getAllItems = (id,result) => {
    db.query("SELECT * FROM cart WHERE user_id = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// get все по user id, food id
export const getAItem = (user,food,result) => {
    db.query("SELECT * FROM cart WHERE user_id = ? AND food_id = ?",[user, food], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// insert новый предмет в корзине
export const insertToCart = (data,result) => {
    db.query("INSERT INTO cart SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// обновление количества товара в корзине
export const updateCartItemQty = (data,result) => {
    db.query("UPDATE cart SET item_qty = ? WHERE user_id = ? AND food_id = ?",[data.item_qty, data.user_id, data.food_id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};


// delete товар из корзины
export const deleteItemInCart = (user,food,result) => {
    db.query("DELETE FROM cart WHERE user_id = ? AND food_id = ?",[user,food], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// delete всех предметов
export const deleteAllItemsByUser = (id,result) => {
    db.query("DELETE FROM cart WHERE user_id = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};