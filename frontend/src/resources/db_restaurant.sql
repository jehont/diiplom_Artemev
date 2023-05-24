-- database name: "db_restaurant"

CREATE TABLE food( 
    food_id INT(11) PRIMARY KEY AUTO_INCREMENT, 
    food_name VARCHAR(255), 
    food_star VARCHAR(255),
    food_vote VARCHAR(255),
    food_price VARCHAR(255),
    food_discount VARCHAR(255),
    food_desc VARCHAR(255),
    food_status VARCHAR(255),
    food_type VARCHAR(255),
    food_category VARCHAR(255),
    food_src VARCHAR(255)
) ENGINE=INNODB;

INSERT INTO food (food_name, food_star, food_vote, food_price, food_discount, food_desc, food_status, food_type, food_category, food_src)
VALUES("Вонтон-суп","4.5", "999", "350", "0.00", "250 грамм", "популярное", "мясное", "Супы", "soup/vonton.png"),
("Луковый суп","4.5", "999", "500", "50", "250 грамм", "популярное", "мясное", "Супы", "soup/onion.png"),
("Борщ сговядиной","4.5","500","400","0.00","260 грамм","популярное","мясное","Супы","soup/borsh-1.png"),
("Солянка","4.5","999","600","50","270 грамм","популярное","мясное","Супы","soup/solynka-1.png"),
("Крем-суп из шампиньонов","4","500","450","0.00","250 грамм","нормальное","вегатериансоке","Супы","soup/Krem-soup-1.png"),
("Окрошка с говядиной","4","500","350","40","260 грамм","новые блюда","мясное","Супы","soup/okroshka-1.png"),
("Окрошка овощная","4.5","500","250","40","250 грамм","сезонное блюдо только онлайн","вегетарианское","Супы","soup/orko.png"),
("Свекольный суп с чечевицей","4.5","100","350","50","250 грамм","Новое блюдо","вегетарианское","Супы","soup/cheche.png"),
("Оливье","4.5","600","250","0.00","180 грамм","Новое блюдо","мясное","Салаты","salat/olivie.png"),
("Сельд под шубой","4.5","999","150","40","160 грамм","популярное","мясное","Салаты","salat/seled.png"),
("Цезарь с курицей","4.5","999","450","0.00","170 грамм","популярное","мясное","Салаты","salat/cezarc.jpg"),
("Цезарь с креветками","4.5","999","550","40","150 грамм","Новое блюдо","мясное","Салаты","salat/cezarkrevedko.jpg"),
("Овощной винегрет","4.5","999","300","0.00","170 грамм","популярное","вегетарианское","Салаты","salat/venegred.png"),
("Греческий салат","4","400","400","40","190 грамм","сезонное блюдо","вегетарианское","Салаты","salat/grec.jpg"),
("Шашлык из курицы","4","699","300","100","150 грамм","популярное","мясное","Мясо & рыба","meat&fish/chiken.png"),
("Шашлык из свинины","4.5","999","360","50","150 грамм","популярное","мясное","Мясо & рыба","meat&fish/pork.png"),
("Сибас","4.5","999","680","50","300 грамм","популярное","мясное","Мясо & рыба","meat&fish/sibas.png"),
("Шашлык из лосося","4.5","999","811","0.00","150 грамм","популярное","мясное","Мясо & рыба","meat&fish/salmon.png"),
("Блины со сметаной","4","999","200","60","250 грамм","нормальное","вегетарианское","Гарниры","sides/blini.png"),
("Сырние палочки","4.5","999","400","50","250 грамм","популярное","вегетарианское","Гарниры","sides/palochi.png"),
("Картофель с розмарином","4","699","200","55","200 грамм","популярное","вегетарианское","Гарниры","sides/potato.png"),
("Овощной гарнир с грибами","4.5","249","5.00","51","250","сезонное блюдо","вегетарианское","Гарниры","sides/ovoshi.png"),
("Капуста тушенная","4.5","999","150","30","250 грамм","популярное","вегетарианское","Гарниры","sides/kapusta.png"),
("Сливочный рис","4.5","699","200 ","40","250 грамм","популярное","вегетарианское","Гарниры","sides/ris.png"),
("Овощи гриль","3.5","699","300","40","300 грамм","Новое блюдо сезонное блюдо","вегетарианское","Гарниры","sides/ovoshigril.png"),
("Кукуруза гриль","4.5","999","150","0.00","150 грамм","популярное","вегетарианское","Гарниры","sides/kukuruza.png"),
("Рис с овощами","4","200","150","0.00","200 грамм","нормальное","вегетарианское","Гарниры","sides/ricovosh.png"),
("Капуста брокколи","4","100","190","0.00","200 грамм","Новое блюдо","вегетарианское","Гарниры","sides/brokkoli.png"),
("Картофель с чесноком","3.5","299","200","45","200 грамм","Новое блюдо","вегетарианское","Гарниры","sides/potatoches.png"),
("Чурос","4.5","999","350","0.00","70 грамм","популярное","вегетарианское","Десерты","dessert/dessert-1.png"),
("Морковный торт","4.5","999","400","45","120 грамм","популярное","вегетарианское","Десерты","dessert/tort.png"),
("Шоколадный фондан","4.5","50","300","0.00","90 грамм","Новое блюдо","вегетарианское","Десерты","dessert/fondan.png"),
("Шарлотка","3","599","150","50","150 грамм","только онлайн","вегетарианское","Десерты","dessert/sharlot.png"),
("Меренговый рулет","4","199","290","0.00","90 грамм","нормальное","вегетарианское","Десерты","dessert/ruler.png"),
("Чизкейк","4","299","290","0.00","150 грамм","нормальное","вегетарианское","Десерты","dessert/chis.png"),
("Лимонад","4.5","999","120","0.00","450 мл","популярное","вегетарианское","Напитки","drink/limonad.png"),
("Клюквенный морс","4.5","999","50","0.00","200 мл","популярное","вегетарианское","Напитки","drink/mors.png"),
("Апельсиновый сок","4.5","599","200","0.00","1000 мл","Новое блюдо сезонное блюдо","вегетарианское","Напитки","drink/sok.png"),
("Чай Да Хун Пао","4","999","150","50","400 мл","популярное","вегетарианское","Напитки","drink/tea.png"),
("Чай Таежный сбор","3.5","999","150","0.00","400 мл","сезонное блюдо популярное","вегетарианское","Напитки","drink/tea2.png"),
("Американо","4.5","999","100","0.00","160 мл","популярное","вегетарианское","Напитки","drink/coffe.png"); 


CREATE TABLE user( 
    user_id INT(11) PRIMARY KEY AUTO_INCREMENT, 
    user_name VARCHAR(255), 
    user_email VARCHAR(255),
    user_phone VARCHAR(255),
    user_password VARCHAR(255),
    user_birth VARCHAR(255),
    user_gender VARCHAR(255)
) ENGINE=INNODB;


CREATE TABLE cart (
  user_id INT,
  food_id INT,
  item_qty INT,
  primary key (user_id, food_id)
);


CREATE TABLE booktable( 
    book_id INT(11) PRIMARY KEY AUTO_INCREMENT, 
    book_name VARCHAR(255), 
    book_phone VARCHAR(255),
    book_people INT,
    book_tables INT,
    user_id INT,
    book_when VARCHAR(255),
    book_note TEXT
) ENGINE=INNODB;


CREATE TABLE billdetails (
  bill_id INT,
  food_id INT,
  item_qty INT,
  primary key (bill_id, food_id)
);

CREATE TABLE billstatus (
  bill_id INT,
  user_id INT,
  bill_phone VARCHAR(255),
  bill_address TEXT,
  bill_when VARCHAR(255),
  bill_method VARCHAR(255),
  bill_discount INT,
  bill_delivery INT,
  bill_total INT,
  bill_paid VARCHAR(255),
  bill_status INT,
  primary key (bill_id)
);