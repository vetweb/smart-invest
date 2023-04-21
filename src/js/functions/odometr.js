
(function(){
  let el1 = document.querySelector('.odometer1');
  let el2 = document.querySelector('.odometer2');
  let el3 = document.querySelector('.odometer3');

  if(el1) {
    setTimeout(function () {
      el1.innerHTML = '12';
      el2.innerHTML = '8';
      el3.innerHTML = '57';
    }, 1000);
  }
})();
