// function currentTime() {
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";
  
//     if(hh == 0){
//         hh = 12;
//     }
//     if(hh > 12){
//         hh = hh - 12;
//         session = "PM";
//      }
  
//      hh = (hh < 10) ? "0" + hh : hh;
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;
      
//      let time = hh + ":" + mm + ":" + ss + " " + session;
  
//     document.getElementById("clock").innerText = time; 
//     let t = setTimeout(function(){ currentTime() }, 1000);
//   }
//   currentTime();

//BUTTON TEST?

// let btn = document.createElement("button");
// btn.innerHTML = "Save";
// btn.onclick = function () {
// alert("Button is clicked");
// };
// document.body.appendChild(btn);

//-

//   JSC.Chart('chartDiv', {
//     type: 'horizontal column',
//     series: [
//        {
//           name:'Andy',
//           points: [
//              {x: 'Apples', y: 50},
//              {x: 'Oranges', y: 32}
//           ]
//        },{
//           name:'Anna',
//           points: [
//              {x: 'Apples', y: 30},
//              {x: 'Oranges', y: 22}
//           ]
//        }
//     ]
//  });


//C TO F CONVERTER?

// function convertToF(celsius) {
//     return celsius * 9/5 + 32
//   }
  
//   convertToF(30);

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

   
   var admin = require("firebase-admin");

   var serviceAccount = require("path/to/serviceAccountKey.json");
   
   admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
     databaseURL: "https://hetaste-laget-s3-default-rtdb.europe-west1.firebasedatabase.app"
   });  


   import { initializeApp } from 'firebase/app';

   const firebaseConfig = {
    apiKey: "AIzaSyAfxNn3StYr8XoMJnCsk_6TZPnCVe5gyig",
    authDomain: "hetaste-laget-s3.firebaseapp.com",
    databaseURL: "https://hetaste-laget-s3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hetaste-laget-s3",
    storageBucket: "hetaste-laget-s3.appspot.com",
    messagingSenderId: "1063955437225",
    appId: "1:1063955437225:web:b80891af14d7635aac7bb8",
    measurementId: "G-W5MRV5H1S3"
  };

   const app = initializeApp(firebaseConfig);



