import { searchShows } from "../modules/api.js";

document.getElementById("search").addEventListener("input", (e)=>{
    const query = e.target.value;
    searchShows(query, (shows)=>{
        console.log(shows[0].show.name)
    })
})