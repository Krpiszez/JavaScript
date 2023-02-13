const sayHello = () => {
    const name1El = document.querySelector("#txtName");
    const text1El = document.querySelector("#welcome");
    text1El.innerHTML = `Hi ${name1El.value}`;
}