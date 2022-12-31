import { showAlert, showConfirm } from "../modules/messages.js";

document.getElementById("btnAlert").addEventListener("click", ()=>{
    showAlert("This is module alert function");
})

document.getElementById("btnConfirm").addEventListener("click", ()=>{
    showConfirm("This is module confirm function");
})
