//модуль BillDetailsModel.js экспортирует функции insertBillDetails и getBillDetails, которые взаимодействуют с базой данных для создания и получения деталей счета соответственно.
import {
    insertBillDetails,
    getBillDetails
} from "../models/BillDetailsModel.js";

// create BillDetails
export const createBillDetails=(req,res)=>{ //принимает запрос (req) и ответ (res) в качестве параметров. Внутри функции извлекается данные из тела запроса (req.body) и вызывается функция insertBillDetails из модели BillDetailsModel.js для вставки деталей счета в базу данных.
    const data = req.body;
    insertBillDetails(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get BillDetails
export const getBillDetailsById=(req,res)=>{      //для получения деталей счета по заданному идентификатору
    getBillDetails(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};