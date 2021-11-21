let convertBtn = document.getElementById('convert');
let resetBtn = document.getElementById('reset');

convertBtn.addEventListener('click', convertTemp);

function convertTemp() {

  function convertKelvin() {
    document.getElementById('kelvinResult').innerHTML = parseInt(document.getElementById('temperature').value) + "\n" + " degree Kelvin";
    document.getElementById('celsiusResult').innerHTML = (parseInt(document.getElementById('temperature').value) - 273) + "\n" + " degree Celsius";
    document.getElementById('fahrenheitResult').innerHTML = Math.floor(((parseInt(document.getElementById('temperature').value) - 273) * (9 / 5) + 32)) + "\n" + " degree Fahrenheit";
  }

  function convertCelsius() {
    document.getElementById('celsiusResult').innerHTML = parseInt(document.getElementById('temperature').value) + "\n" + " degree Celsius";
    document.getElementById('kelvinResult').innerHTML = (parseInt(document.getElementById('temperature').value) + 273) + "\n" + " degree Kelvin";
    document.getElementById('fahrenheitResult').innerHTML = Math.floor((parseInt(document.getElementById('temperature').value) * (9 / 5)) + 32) + "\n" + " degree Fahrenheit";
  }

  function convertFahrenheit() {
    document.getElementById('fahrenheitResult').innerHTML = parseInt(document.getElementById('temperature').value) + "\n" + " degree fahrenheit";
    document.getElementById('kelvinResult').innerHTML = Math.floor((parseInt(document.getElementById('temperature').value) - 32) * (5 / 9) + 273) + "\n" + " degree Kelvin";
    document.getElementById('celsiusResult').innerHTML = Math.floor((parseInt(document.getElementById('temperature').value) - 32) * (5 / 9)) + "\n" + " degree Celsius";
  }
  if (document.getElementById('units').value == 'kelvin') {
    convertKelvin();
  } else if (document.getElementById('units').value == 'celsius') {
    convertCelsius();
  } else if (document.getElementById('units').value == 'fahrenheit') {
    convertFahrenheit();
  } else if (document.getElementById('units').value == 'select') {
    alert("SELECT UNIT");
  }
}

resetBtn.addEventListener('click', resetValue);

function resetValue() {
  document.getElementById("temperature").value = '';
  document.getElementById("celsiusResult").innerHTML = '';
  document.getElementById("kelvinResult").innerHTML = '';
  document.getElementById("fahrenheitResult").innerHTML = '';
  document.getElementById('units').value = 'select';
}
