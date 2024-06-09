function converterTemperatura(){
    let celsius = document.getElementById (`celsius-input`).value;
    celsius = parseFloat(celsius);
    let Fahrenheit = (celsius * 1.8) +32;
let resultText =`celsius ${celsius}ºC<br> Fahrenheit ${Fahrenheit}ºF<br>`;



    document.getElementById(`result`).innerHTML = resultText



}