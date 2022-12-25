const items = [
    "Apple",
    "Melon",
    "Banana",
    "Strawberry"
]

const addItem = () => {
    let item = document.getElementById("q1i1").value;
    if (items.includes(item) || item == null) return;
    items.push(item);
    displayItems();
}
document.getElementById("q1b2").addEventListener("click", addItem);

const displayItems = () => {
    let html = "";
    let list1 = document.getElementById("q1l1");
    for (var i = 0; i<items.length; i++){
        html += `<li>${items[i]}</li>`;
    }
    list1.innerHTML = html;
}

document.getElementById("q1b1").addEventListener("click", displayItems);


