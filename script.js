'use strict'

  let mobileButton = document.querySelector('#mobile--menu');

  mobileButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header--menu').classList.toggle('on');
    document.querySelector('.fa').classList.toggle('fa-times');
  })