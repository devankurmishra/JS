'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/{india}}`);
request.send();
request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(typeof data);
  console.log(data);
  const html = `<article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span></span>${data.population}</p>
    <p class="country__row"><span></span>${data.languages[1]}</p>
    <p class="country__row"><span></span>${'Currency : '}${
    data.currencies.INR.name
  }${', Symbol : '}${data.currencies.INR.symbol}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.getElementsByClassName.opacity = 1;
});
