const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

for(let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "true";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "true";
        }
        select.append(newOption); //here we convert on country to individual option and add to select
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    }) //evt.target refers to the DOM element that triggered the event.
       //In your case, it's the <select> dropdown that was changed.

    const updateFlag = (element) => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
    };

    btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;
        console.log(amtVal);
        if(amtVal === "" || amtVal < 1) {
            amtVal = 1;
            amount.value = "1";
        }
    const fromCurr = document.querySelector(".from select").value;
    const toCurr = document.querySelector(".to select").value;
    const URL = `${BASE_URL}/${fromCurr}/${toCurr}.json`;

    });
}
