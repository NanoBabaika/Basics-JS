
const leftBtn = document.querySelector("#left");
const rigthBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".item");



const minRight = 0;

const itemWidth = getComputedStyle(items[0]).width;

const step = parseInt(itemWidth);

const presShowItems = 300 / step;

const maxRight = (items.length - presShowItems) * 100;
 
let currentRight = 0;

itemsList.style.right = currentRight;


right.addEventListener("click", e => {
    e.preventDefault();

    if(currentRight < maxRight) {
        currentRight += step;

        itemsList.style.right = `${currentRight}px`;
    }
});



left.addEventListener("click", e => {
    e.preventDefault();

    
    if(currentRight > minRight) {
        currentRight -= step;

        itemsList.style.right = `${currentRight}px`;
    }
});