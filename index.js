const getColor = () => {

    // Hex Code
    // Math.randon gives the random number by clicking by button.
    // "16777215" is multiply with the random number and it will give the number which is equal to Hex Code.
    // Math.floor gives the nearest integer.
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("Color-code").innerText = randomCode;
    
}

// Event Call
document.getElementById("btn").addEventListener("click", getColor);

// inital call
getColor();