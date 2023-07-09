const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // kelvin to Celsius 
    const kelTocel =  (cel) => {
        let kelvin = (inputTemp - 273.15).toFixed(1);
        return kelvin;
    }
     

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else if (valueTemp == 'fahrenheit'){
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }else{
        document.getElementById("result").innerHTML = kelTocel(inputTemp) + "&#176; Celsius";
    }
}

