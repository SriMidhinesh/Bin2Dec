const inputField = document.getElementById("input");
const warning = document.getElementById("warning");
const result = document.getElementById("result");

document.getElementById("button").addEventListener("click", () => {
    warning.style.display = "none"; 
    let inputVal = inputField.value.trim(); 
    let position = 0; 
    let sum = 0; 

    if (inputVal.length == 0) {
        result.value = "";
        return;
    }

    for (let i = inputVal.length - 1; i >= 0; i--) {
        const digit = inputVal[i];
        if (digit === "0") {
            position++;
            continue;
        } else if (digit === "1") {
            sum += Math.ceil(Math.exp(position * Math.log(2)));
        } else {
            warning.style.display = "block";
            result.value = "";
            return;
        }
        position++;
    }
    result.value = sum;
});
