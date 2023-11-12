
const leftBtn = document.querySelector("#left");
const rigthBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);


rigthBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right)
    console.log(currentRight);

    if(currentRight < 560){
        items.style.right = `${currentRight + 100}px`;
    }

}) ;


leftBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let currentRight = parseInt(computedStyles.right)

    if(currentRight > 0){
        items.style.right = `${currentRight - 100}px`;
    }
}) 


