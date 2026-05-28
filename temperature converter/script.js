function convertTemperature(){

    const celsiusInput=document.getElementById("celsius");
    const fahrenheitInput=document.getElementById("Fahrenheit");

    if(!isNaN(celsiusInput.value)){

        const celsiusValue =parseFloat(celsiusInput.value);
        const fahrenheitValue =(celsiusInput*9/5 )+32;

        fahrenheitInput.value=fahrenheitValue.toFixed(2);

    }else if(!isNaN(fahrenheitInput.value)){

        
        
        const fahrenheitValue =fahrenheitInput.value;
        const celsiusValue =(fahrenheitValue-32)*5/9;

        celsiusInput.value=celsiusValue.toFixed(2);
    }else{
        alert("please enter a valid number")
    }
    



}