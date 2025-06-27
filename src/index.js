import "./styles.css";

let button = document.querySelector(".button");
let list = document.querySelector("ul");

function toggleList(list) {
    list.classList.toggle("inactive"); 
}

button.addEventListener("click", () => toggleList(list));

list.addEventListener("click", (event) => {
    if(event.target.nodeName == "LI") {
        button.textContent = event.target.textContent;
        toggleList(list);
    }
});