import {
    insertBooking,
    getAllTables
} from "../models/BookTableModel.js";

// Cоздание бронирования
export const createBooking=(req,res)=>{
    const data = req.body;
    insertBooking(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const getAllTableBookings=(req,res)=>{
    getAllTables((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};