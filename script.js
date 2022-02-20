const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    const temp_selected = document.getElementById('temp_differ');
    const valueTemp = temp_differ.options[temp_selected.selectedIndex].value;

    const celTofah = (celcius) => {
        let fahreheit = Math.round((celcius * 9/5) + 32);
        return fahreheit;
    }

    const fahTocel = (fahrenheit) => {
        let celsius = Math.round((fahrenheit - 32) * 5/9 );
        return celsius;
    }

    let result ;
    if(valueTemp == 'cel'){
        result = celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} °Celcius`;
    }
    else{
        result = fahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} °Fahrenhiet`;
    }
}