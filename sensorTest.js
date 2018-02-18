var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var forceSensor = new Gpio(2, 'in'); //use GPIO pin 4 as output

function pollSensor() { //function to start blinking
  if (forceSensor.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    console.log(0); //
  } else {
    console.log(1); //
  }
}

var pollSensor = setInterval(pollSensor, 250); //run the blinkLED function every 250ms
