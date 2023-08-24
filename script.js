let viewsCount = document.getElementById("number");
let range = document.getElementById("pageViews");
let price = 8;
let priceText = document.querySelector(".num");
let plan = document.getElementById("plan");
let checkbox = document.querySelector("input[type=checkbox]");

range.addEventListener("change", () => {

    switch (range.value) {
        case "25":
            viewsCount.textContent = "50k";
            price = 12;
            break;
        case "50":
            viewsCount.textContent = "100k";
            price = 16;
            break;
        case "75":
            viewsCount.textContent = "500k";
            price = 24;
            break;
        case "100":
            viewsCount.textContent = "1M";
            price = 36;
            break;
        default:        
            viewsCount.textContent = "10k";
            price = 8;
            break;
    }
    
    let discount = 0;

    if (checkbox.checked) {
        discount = price * 25 / 100;
        priceText.textContent = `$${((price - discount) * 12).toFixed(2)}`;
    } else {
        priceText.textContent = `$${(price - discount).toFixed(2)}`
    }
    
});

function inputProgress() {
    let rangeValue = range.value;
    range.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${rangeValue}%, hsl(224, 65%, 95%) ${rangeValue}%`;
}

inputProgress();

checkbox.addEventListener("change", () => {
    let discount = 0;
    let billing = document.querySelector(".billing");

    if (checkbox.checked) {
        billing.classList.add("active");
        billing.classList.remove("inactive");
        discount = price * 25 / 100;
        plan.textContent = '/ year';
        priceText.textContent = `$${((price - discount) * 12).toFixed(2)}`;
    } else {
        billing.classList.add("inactive");
        billing.classList.remove("active");
        priceText.textContent = `$${(price - discount).toFixed(2)}`;
        plan.textContent = '/ month';
    }
});
