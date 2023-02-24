function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5.0 + 32;

  if (fahrenheit >= 14 && fahrenheit < 32) {
    frase = "Temperatura baja";
  } else if (fahrenheit >= 32 && fahrenheit < 68) {
    frase = "Temperatura adecuada";
  } else if (fahrenheit >= 68 && fahrenheit <= 96) {
    frase = "Temperatura alta";
  } else {
    frase = "Temperatura desconocida";
  }

  console.log(frase);
}

convertirCelsiusAFahrenheit(15);
