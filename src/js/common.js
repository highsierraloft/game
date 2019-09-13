$(document).ready(function () {
  let mainClick = $('.click');
  let count = 0;
  let mod = 1;
  mainClick.click(function() {
    count += 1 * mod;
    mainClick.text(count);
  });
});