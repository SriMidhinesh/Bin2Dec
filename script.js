const inputField = document.getElementById("input");
const warning = document.getElementById("warning");
let result = document.getElementById("result");


document.getElementById("button").addEventListener('click', () => {
    const inputVal = inputField.value;
    // console.log(typeof inputValue);
    let sum = 0;
    let n = inputVal.length;
    for(let i = 0; i<n; i++) {

        if (inputVal[i] == "0" || inputVal[i] == "1") {
            warning.style.display = "none";
            let intValue = parseInt(inputVal[i]);
            sum += intValue*(2**(n-i-1));
        }
        else {
            warning.style.display = "block";
            sum = 0
            result.value = none;
            break;
        }
    }
    // console.log(sum);
    result.value = sum;
})