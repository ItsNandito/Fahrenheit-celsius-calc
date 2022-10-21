//this is a commit test
function celsiusToFahrenheit(){

    let input = document.getElementById('cInput').value;
    input = parseInt(input);
    //console.log(typeof(input))
    if (isNaN(input)){
        console.log('NOT A NUMBER')
        alert("you dummy that is not a number")
    }else{
        console.log('is a number')
        let f = (input * 1.8) + 32;
        console.log(f);
        let output1 = document.getElementById('outputFahrenheit');
        output1.innerHTML = 'The Temperature in Fahrenheit is '+ f + "°";
    }
    
    
    
}

function fahrenheitToCelsius(){
    let input = document.getElementById('fInput').value;
    input = parseInt(input);
    //console.log(typeof(input))
    if (isNaN(input)){
        console.log('NOT A NUMBER')
        alert("you dummy that is not a number")
    }else{
        console.log('is a number')
        let c = (input - 32) * 0.5555555555555556;
        console.log(c);
        let output1 = document.getElementById('outputCelsius');
        output1.innerHTML = 'The Temperature in Celsius is '+ c.toFixed(2) + "°";
    }

}