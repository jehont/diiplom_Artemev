import mysql from "mysql2"; //модуль предоставляет функциональность для работы с базами данных MySQL.

// create the connection to database

const db = mysql.createConnection({  //создание объекта db
    host: "localhost",
    user: "root",
    password: "",
    database: "db_restaraunt"
});


db.connect(error => {     //устанавливает соединение с базой данных MySQL, используя указанные параметры
  if (error) throw error;
  console.log("Усрешно подключено к базе данных.");
});

export default db; // экспортирует это соединение для использования в других модулях.