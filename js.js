//рандомне значення
let getRandomNumber = function (size) {
   return Math.floor(Math.random() * size);
};
//визначення дистанції до кладу
let getDistance = function (event, target) {
   let diffX = event.offsetX - target.x;
   let diffY = event.offsetY - target.y;
   return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
//Підсказка
let getDistanceHint = function (distance) {
   if (distance < 20) {
      return "Руки вже горять!";
   } else if (distance < 40) {
      return "Дуже гаряче";
   } else if (distance < 80) {
      return "Гаряче";
   } else if (distance < 160) {
      return "Тепло";
   } else if (distance < 320) {
      return "Холодно";
   } else if (distance < 320) {
      return "Сильний холод";
   } else if (distance < 480) {
      return "Дуже сильний холод";
   } else if (distance < 560) {
      return "Мороз";
   } else if (distance < 640) {
      return "Сильний Мороз";
   } else if (distance < 720) {
      return "Дуже сильний мороз";
   } else {
      return "За полярним колом!";
   }
};
//перемінні
let width = 800;
let height = 800;
let clicks = 0;
let counter = 25;
//рандомні координати цілі
let target = {
   x: getRandomNumber(width),
   y: getRandomNumber(height)
};

//обробка кліку по карті
$("#map").click(function (event) {
   clicks++
   counter--
   //відображення підсказок
   //получемо відстань від кліку до кладу
   let distance = getDistance(event, target);
   // перетворюємо значення(відстань) в підсказу
   let distanceHint = getDistanceHint(distance);
   //запис в елемент #distance нову підсказку
   $("#distance").text(distanceHint);
   //Перевірка на виграш
   if (distance < 15) {
      alert("Клад найден! Сделано кликов: " + clicks);
   }
   //перевірка склільки кліків лишилось
   if (counter === 0) {
      alert("Кінець ігри")
      counter = 25;
   }
   if (getDistanceHint(distance) !== "Руки вже горять!") {
      $("#meter").text("лишилось " + counter + " кліків");
   }

});
