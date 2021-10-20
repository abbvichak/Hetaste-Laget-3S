let database = firebase.database();

var temp1 = database.ref('Victors Sensor/Temperature/Current_Temp');
var hum1 = database.ref('Victors Sensor/Humidity/Current_Hum');

var temp2 = database.ref('Gabriels Sensor/Temperature/Current_Temp')
var hum2 = database.ref('Gabriels Sensor/Humidity/Current_Hum')

var temp3 = database.ref('Lucas Sensor/Temperature/Current_Temp')
var hum3 = database.ref('Lucas Sensor/Humidity/Current_Hum')

var temp4 = database.ref('Noels Sensor/Temperature/Current_Temp')
var hum4 = database.ref('Noels Sensor/Humidity/Current_Hum')

var temp5 = database.ref('Simons Sensor/Temperature/Current_Temp')
var hum5 = database.ref('Simons Sensor/Humidity/Current_Hum')

let temporhum = [];
let selectedType = 0;

function updateTempHum1() {
  console.log(1);
  document.getElementById("grader1").innerHTML = `${temporhum[selectedType]}${selectedType == 0 ? "°C" : "%"}`
}
function updateTempHum2() {
  console.log(2);
  document.getElementById("grader2").innerHTML = `${temporhum[selectedType]}${selectedType == 0 ? "°C" : "%"}`
}
function updateTempHum3() {
  console.log(3);
  document.getElementById("grader3").innerHTML = `${temporhum[selectedType]}${selectedType == 0 ? "°C" : "%"}`
}
function updateTempHum4() {
  console.log(4);
  document.getElementById("grader4").innerHTML = `${temporhum[selectedType]}${selectedType == 0 ? "°C" : "%"}`
}
function updateTempHum5() {
  console.log(5);
  document.getElementById("grader5").innerHTML = `${temporhum[selectedType]}${selectedType == 0 ? "°C" : "%"}`
}
temp1.on('value', data => {
  updateTempHum1();
  console.log("temperature");
  temporhum[0] = data.node_.value_;

});

hum1.on('value', data => {
  console.log("humidity");
  updateTempHum1();
  temporhum[1] = data.node_.value_;
});

temp2.on('value', data => {
  updateTempHum2();
  console.log("temp2");
  temporhum[0] = data.node_.value_;

});

hum2.on('value', data => {
  console.log("hum2");
  updateTempHum2();
  temporhum[1] = data.node_.value_;
});

temp3.on('value', data => {
  updateTempHum3();
  console.log("temp");
  temporhum[0] = data.node_.value_;

});

hum3.on('value', data => {
  console.log("hum");
  updateTempHum3();
  temporhum[1] = data.node_.value_;
});

temp4.on('value', data => {
  updateTempHum4();
  console.log("temp");
  temporhum[0] = data.node_.value_;

});

hum4.on('value', data => {
  console.log("hum");
  updateTempHum4();
  temporhum[1] = data.node_.value_;
});

temp5.on('value', data => {
  updateTempHum5();
  console.log("temp");
  temporhum[0] = data.node_.value_;

});

hum5.on('value', data => {
  console.log("hum");
  updateTempHum5();
  temporhum[1] = data.node_.value_;
});



function Time() {
  // Creating object of the Date class
  var date = new Date();
  // Get current hour
  var hour = date.getHours();
  // Get current minute
  var minute = date.getMinutes();
  // Get current second
  var second = date.getSeconds();
  // Variable to store AM / PM
  var period = "";
  // Assigning AM / PM according to the current hour
  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
  // Converting the hour in 12-hour format
  if (hour == 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour = hour - 12;
    }
  }
  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  second = update(second);
  // Adding time elements to the div
  document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);
}
// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
  if (t < 10) {
    return "0" + t;
  }
  else {
    return t;
  }
}
Time();

document.getElementById("menu-buttons").getElementsByClassName("")

function click() {
  selectedType = number(!selectedType);
  console.log(`Selected Type: ${SelectedType}`)
}