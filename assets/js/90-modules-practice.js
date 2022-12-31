import { strSortAsc, strSortDesc, numSortAsc, numSortDesc } from "../modules/sorting.js";

const strArr = [
    "Mustafa",
    "Ali",
    "Tom Hanks",
    "Angelina Jolie",
    "Ülker",
    "Yavuz",
    "Zeta"
]

const numArr = [
    43,
    23,
    65,
    93,
    2
]

document.getElementById("sortStrAscBtn").addEventListener("click", ()=>{
    const newArr = strSortAsc(strArr);
    console.log(strArr);
    console.log(newArr);
})

document.getElementById("sortStrDescBtn").addEventListener("click", ()=>{
    const newArr = strSortDesc(strArr);
    console.log(strArr);
    console.log(newArr);
})

document.getElementById("sortNumberAscBtn").addEventListener("click", ()=>{
    const newArr = numSortAsc(numArr);
    console.log(numArr);
    console.log(newArr);
})

document.getElementById("sortNumberDescBtn").addEventListener("click", ()=>{
    const newArr = numSortDesc(numArr);
    console.log(numArr);
    console.log(newArr);
})

