const cities = ["New York", "Istanbul", "Warsaw", "Amsterdam"];

const btnAll = document.querySelectorAll("button");

for (let i =0; i<btnAll.length; i++){
    btnAll[i].addEventListener("click", (e) =>{
        switch(e.target.id){
            case "btnAdd" :
            const city = document.querySelector("#city").value;
            if (!city || cities.includes(city)) return;
            cities.push(city);
            loadList();
            break;
            case "btnSort" :
            cities.sort();
            loadList();
            break;
            case "btnReverse" :
            cities.reverse();
            loadList();
            break;
            case "btnRemoveFirst" :
            cities.shift();
            loadList();
            break;
            case "btnRemoveLast" :
            cities.pop();
            loadList();
            break;
            case "btnRemoveAll" :
            cities.splice(0);
            loadList();
            break;
            case "btnMix" :
            getRandom();
            loadList();
            break;
            default :
            alert("No Such Option !!");
        }
    }
    )
}

const loadList = () => {
    let html = "";
    for (let i =0; i<cities.length; i++){
        html+= `<li>${cities[i]}</li>`
    }
    const listOfCities = document.querySelector("#cityList");
    listOfCities.innerHTML = html;
}

const getRandom = () => {
    const arr = [];
    while(cities.length > 0){
        let index = Math.floor(Math.random()*cities.length);
        let city = cities[index];
        arr.push(city);
        cities.splice(index, 1);
    }
    cities.splice(0, 0, ...arr);
}