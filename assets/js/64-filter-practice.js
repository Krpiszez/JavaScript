import {countries} from '../data/countries.js';

const loadCountries = () => {
    let options = "";
    for (let country of countries){
        options += `<option value="${country.ccn3}">${country.name.common}</option>`;
    }

    let selectEl = document.querySelector("#countries");
    selectEl.innerHTML = options;

};

const getCountry = (id) => {
    const arr = countries.filter((country) => country.ccn3 === id);
    if(arr.length > 0) return arr[0];
    else return null;
}

let selectEl = document.querySelector("#countries");
selectEl.addEventListener("change", (e) => {
    let tdEl1 = document.querySelector("#details tr:nth-child(1) td")
    let tdEl2 = document.querySelector("#details tr:nth-child(2) td")
    let tdEl3 = document.querySelector("#details tr:nth-child(3) td")

    const country = getCountry(e.target.value);

    tdEl1.innerHTML = country.capital.join("-");
    tdEl2.innerHTML = Object.values(country.currencies).map(item => item.name).join("-");
    tdEl3.innerHTML = Object.values(country.languages).join("-");
})
loadCountries();