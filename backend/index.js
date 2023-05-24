// используется nodemon чтобы не надо было вводи node index.js каждый раз после созранения кода

// import express - для создания Rest API
import express from "express";

// import body-parser - помогает парсировать запрос и создать объект req.body
import bodyParser from "body-parser";

// import cors - предоставляет промежуточное ПО Express для включения CORS с различными параметрами, подключения внешнего интерфейса
import cors from "cors";

// import routes
import router from "./routes/routes.js";

// init express
const app = express();

// use express json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use cors
app.use(cors());

// use router
app.use(router);

// // Handle production
// if (process.env.NODE_ENV === 'production'){
//   // Static folder
//   app.use(express.static(__dirname + '/public/'));

//   // Handle SPA
//   app.get(/.*/, (req,res)=> res.sendFile(__dirname + '/public/index.html'));
// }

app.get('/', function(req, res){
    res.json({ message: 'Добро пожаловать в api ресторана' });
});

// PORT
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// гайды
// https://www.youtube.com/watch?v=GK2TiAAxmQ0
// https://www.bezkoder.com/node-js-rest-api-express-mysql/
// https://www.bezkoder.com/serve-vue-app-express/
// https://www.bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/
// https://www.youtube.com/watch?v=W-b9KGwVECs
// https://stackoverflow.com/questions/43362014/heroku-no-default-language-could-be-detected-for-this-app-error-thrown-for-no
// https://stackoverflow.com/questions/16128395/what-is-procfile-and-web-and-worker
// https://www.youtube.com/watch?v=lwOsI8LtVEQ