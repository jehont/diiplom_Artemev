import {
    getNewestId,
    insertBillStatus,
    getBillsByUser,
    getBillsByBill,
    getAll,
    updateStatus,
    updatePaid,
    cancelStatus
} from "../models/BillStatusModel.js";

// get новейшего Bill Status
export const showNewestStatusId=(req,res)=>{  //получения идентификатора последнего состояния счета
    getNewestId((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// создание BillStatus
export const createBillStatus=(req,res)=>{  //cоздания нового состояния счета в базе данных
    const data = req.body;
    insertBillStatus(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get Bills статус
export const getAllBillsByUser=(req,res)=>{  //для получения всех состояний счета, связанных с определенным пользователем по заданному идентификатору
    getBillsByUser(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get Bills статус
export const getAllBillsByBill=(req,res)=>{ //для получения всех состояний счета, связанных с определенным счетом по заданному идентификатору
    getBillsByBill(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get Bills статус
export const getAllBills=(req,res)=>{ // для получения всех состояний счет
    getAll((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// обновить Status
export const updateBillStatus=(req,res)=>{
    updateStatus(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// обновить Paid
export const updateBillPaid=(req,res)=>{
    updatePaid(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// закрыть Status
export const cancelBillStatus=(req,res)=>{
    cancelStatus(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};