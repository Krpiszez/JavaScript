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

const totalArea = countries.reduce((total, country) => {
    return total + country.area;
},0);

document.querySelector("#totalArea").innerHTML = totalArea;

document.getEleme

alert(totalArea);