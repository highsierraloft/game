$(document).ready(function () {
  let mainClick = $('#clicked');
  let money = $('#money');
  let count = 0;
  let mod = 1;
  mainClick.click(function() {
    count += 1 * mod;
    money.text(count);
  });
});