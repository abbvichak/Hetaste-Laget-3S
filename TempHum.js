let database = firebase.database();
let MaxSize = 6
let values = [
  {
   Klassrummet: [],
   Terrariet: [],
   Vardagsrummet: [],
   Entren: [],
   Biblioteket: []
  },
  {
    Klassrummet: [],
    Terrariet: [],
    Vardagsrummet: [],
    Entren: [],
    Biblioteket: []
  }
];

let sensor1 = database.ref('Victors Sensor');
let sensor2 = database.ref('Gabriels Sensor')
let sensor3 = database.ref('Lucas Sensor')
let sensor4 = database.ref('Noels Sensor')
let sensor5 = database.ref('Simons Sensor')


let selectedType = 0;

function updateSensor(id, data){
  let room = Object.keys(values[0])[id - 1];
  if(new Date().getSeconds() % 10 == 0){
    pushToArray(0, room, data.Temperature.Current_Temp);
    pushToArray(1, room, data.Humidity.Current_Hum);
    beigechilling()
  }

  data = values[selectedType][room][0]
  document.getElementById(`grader${id}`).innerHTML = 
    `${data === undefined ? 0 : data}${selectedType == 0 ? "°C" : "%"}`;
}

sensor1.on('value', data => updateSensor(1, data.val()));
sensor2.on('value', data => updateSensor(2, data.val()));
sensor3.on('value', data => updateSensor(3, data.val()));
sensor4.on('value', data => updateSensor(4, data.val()));
sensor5.on('value', data => updateSensor(5, data.val()));


// type - temperature and humidity
// roomName - The name of the room list to update
// value - The value to push
function pushToArray(type, roomName, value){
  if(values[type][roomName].length == MaxSize)
    values[type][roomName].pop()

  values[type][roomName].unshift(value);
}

function update() {

  let date = new Date();

  let hour = date.getHours();

  let minute = date.getMinutes();

  let second = date.getSeconds();

  let period = "";
  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
  if (hour == 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour = hour - 12;
    }
  }

  hour = updateClock(hour);
  minute = updateClock(minute);
  second = updateClock(second);
  document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
  setTimeout(update, 1000); 
}

function updateClock(t) {
  if (t < 10) {
    return "0" + t;
  }
  else {
    return t;
  }
}

update();

document.getElementsByClassName("temp-button")[0].onclick = () => {
  selectedType = 0
}
document.getElementsByClassName("hum-button")[0].onclick = () => {
  selectedType = 1
}

function beigechilling(){
 let table = document.getElementsByClassName("temphum-table")
 for(let i = 0; i < table.length;i++){
    for(let j = 1; j < table[i].children[0].children.length; j++){
      table[i].children[0].children[j].children[1].innerHTML = 
        (values[0][Object.keys(values[0])[i]][j] === undefined ? 0 : values[0][Object.keys(values[0])[i]][j]) + "&degC";
      table[i].children[0].children[j].children[2].innerHTML = 
        (values[0][Object.keys(values[0])[i]][j] === undefined ? 0 : values[0][Object.keys(values[0])[i]][j]) + "%";
    }
 }
}
beigechilling()
