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
  let moneyTotal = 0;
  //Модификатор при рестарте игры
  let mod = 1;

  let clickFarm = 1;

  let randX;
  let randY;

  // ------------- События -------------

  onStart();

  farmElement.click(function () {
    moneyTotal += clickFarm * mod;
    moneyElement.text("Money: " + moneyTotal);
    clickEffect();
  });

  // ------------- Функции -------------

  function onStart() {
    moneyElement = $("<h3></h3>").text('Money: ' + moneyTotal).appendTo(".stats");
    modElement = $("<h3></h3>").text('Mod: ' + mod).appendTo(".stats");
    farmElement = $("<div></div>").addClass("clicked").appendTo(".click");
    $(".my_audio").trigger('load');
  }

  function clickEffect() {
    // $(".my_audio").trigger('play');
    new Audio('../src/audio/onClickEffect.mp3').play();
    randX = Math.floor(Math.random() * (300 - (-100) + 1)) - 100;
    randY = Math.floor(Math.random() * (200 - (-100) + 1)) - 100;
    $("<span></span>").css("top", randY).css("left", randX).text("+" + clickFarm).appendTo(".clicked").animate({
      top: "+=100",
      opacity: "0"
    }, 1500).fadeOut(1, function () {
      $(this).remove();
    });
  }
});