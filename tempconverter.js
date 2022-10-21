//this is a commit test
function celsiusToFahrenheit(){

    //Grabs Data put into the input tag
    let input = document.getElementById('cInput').value;
    //Converts input into a int
    input = parseInt(input);
    
    //console.log(background)


    if (isNaN(input)) { //This is verifing if the input put in is not a number
        console.log('NOT A NUMBER');
        alert("you dummy that is not a number");

    } else {

        console.log('is a number');
        let f = (input * 1.8) + 32; //f = fahrenheit
        console.log(f);
        let output = document.getElementById('outputFahrenheit');
        output.innerHTML = `The Temperature in Fahrenheit is ${f}&deg;`;

        //These next four if statements are going to check the range of the variable f (Fahrenheight) and change BG color accordingly
        let background = document.querySelector('section') //creating a variable that will link us the our section tag

        if (f <= 64){
            //var background has taken the value of our section tag (line 17) we are then editing the style.background to the hex color ##DBF1FD
            background.style.background = "#DBF1FD";

            }
            //we are checking if f (fahrenheit) is between either two numbers '65-75'
        if (65 <= f && f <=75){

            background.style.background = "#ffd013";

            }
        
        if (76 <= f && f <= 85){

            background.style.background = "#fb8a24";

            }
        if (86 <= f && f <= 120){

            background.style.background = "#ff5c3a";
    
            }

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

        let background = document.querySelector('section')
        console.log('is a number')
        let c = ((input - 32) * 0.5555555555555556).toFixed(2); // c = Celsius
        console.log(c);
        let output = document.getElementById('outputCelsius');
        output.innerHTML = `The Temperature in Celsius is ${c}&deg;`;
        
        //These next four if statements are going to check the range of the variable c (celsius) and change BG color accordingly
        if (c <= 15.9){

            background.style.background = "#DBF1FD";

            }

        if (16 <= c && c <=20.9){

            background.style.background = "#ffd013";

            }
        
        if (21 <= c && c <= 29.9){

            background.style.background = "#fb8a24";

            }

        if (30 <= c && c <= 50){

            background.style.background = "#ff5c3a";
    
            }

    }

}