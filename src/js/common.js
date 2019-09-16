$(document).ready(function () {
  // ------------- DOM Элементы -------------

  // Элемент по которому кликает игрок
  let farmElement;
  // Элемент выводящий кол-во денег
  let moneyElement;
  // Элемент выводящий модификатор
  let modElement;

  // ------------- Глобальные переменные -------------

  // Общее кол-во денег
  let moneyTotal;
  //Модификатор при рестарте игры
  let mod = 1;

  let clickFarm = 1;

  let randX;
  let randY;

  let buyList = [{
    name: 'Гастарбайтер',
    price: 15,
    bricksPerSec: 0.1,
    quantity: 0
  }, {
    name: 'Бригадир',
    price: 100,
    bricksPerSec: 1,
    quantity: 0
  }, {
    name: 'Каменная шахта',
    price: 1100,
    bricksPerSec: 8,
    quantity: 0
  }, {
    name: 'Ферма',
    price: 12000,
    bricksPerSec: 47,
    quantity: 0
  }, {
    name: 'Завод',
    price: 130000,
    bricksPerSec: 265, 
    quantity: 0
  }];

  // ------------- События -------------
  onStart();

  farmElement.click(function () {
    moneyTotal += clickFarm * mod;
    moneyElement.text("Money: " + moneyTotal);
    clickEffect();
  });

  $(".stats-save").click(saveLocal);

  // ------------- Функции -------------

  function onStart() {
    if (localStorage.getItem("currentMoney") === null) {
      moneyTotal = 0;
    } else {
      moneyTotal = Number(localStorage.getItem("currentMoney"));
    }
    moneyElement = $("<h3></h3>").text('Money: ' + moneyTotal).appendTo(".stats");
    modElement = $("<h3></h3>").text('Mod: ' + mod).appendTo(".stats");
    farmElement = $("<div></div>").addClass("clicked").appendTo(".click");
  }

  function clickEffect() {
    new Audio('../src/audio/onClickEffect.mp3').play();
    randX = Math.floor(Math.random() * (300 - (-100) + 1)) - 100;
    randY = Math.floor(Math.random() * (200 - (-100) + 1)) - 100;
    randSize = Math.floor(Math.random() * (36 - (-20) + 1)) - 20;
    $("<span></span>").css("top", randY).css("left", randX).css("font-size", randSize).text("+" + clickFarm).appendTo(".clicked").animate({
      top: "+=100",
      opacity: "0",
    }, 1500).fadeOut(1, function () {
      $(this).remove();
    });
  }

  function saveLocal() {
    new Audio('../src/audio/saveClick.mp3').play();
    localStorage.setItem("currentMoney", moneyTotal);
  }
});