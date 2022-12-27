import {countries} from "../data/countries.js";

const loadCountries = () => {
    let options = "";

    for (let country of countries){
        options += `<option>${country.name.common} (${country.area})</option>`
    }
    let selectEl1 = document.getElementById("countries");
    selectEl1.innerHTML = options;
}

loadCountries();