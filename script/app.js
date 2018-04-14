if ('serviceWorker' in navigator) {
    
    navigator.serviceWorker.register('./service-worker.js', { scope: './'}).then(function(registration){
        console.log("Service Worker Registered!");
    })
    .catch(function(err){
        console.log('Service Worker failed to register', err);
    })
}

Notification.requestPermission();

var sched1 = "6:00 - 7:00";
var sched2 = "7:00 - 8:00";
var locSkating = "Near the Skating Rink";
var locPark = "Near the Children's Park";
var locSolibao = "Near Solibao";
var locRose = "Near the Rose Garden";

var dateSched = new Date();

var date1 = new Date("April 6, 2018 6:00:00");
date1.setDate((dateSched.getDate()) + 1);

var date2 = new Date("April 6, 2018 7:00:00");
date2.setDate((dateSched.getDate()) + 1);

var countdown = "";

function Instructor(name, schedule, place, date, countdown) {
    this.name = name;
    this.schedule = schedule;
    this.place = place;
    this.date = date;
    this.countdown = countdown;
}

var instMel = new Instructor("Mel", sched1, locSkating, date1, "");
var instXylon = new Instructor("Xylon", sched1, locSkating, date1, "");
var instJules = new Instructor("Jules", sched1, locSkating, date1, "");
var instFrank = new Instructor("Frank", sched1, locPark, date1, "");
var instJr = new Instructor("JR", sched1, locPark, date1, "");
var instKevin = new Instructor("Kevin", sched1, locSolibao, date1, "");
var instSarah = new Instructor("Sarah", sched1, locSolibao, date1, "");
var instArman = new Instructor("Arman", sched2, locRose, date2, "");
var instGrace = new Instructor("Grace", sched2, locRose, date2, "");
var instMarvin = new Instructor("Marvin", sched2, locRose, date2, "");
var instJuvy = new Instructor("Juvy", sched2, locRose, date2, "");
var instJoseph = new Instructor("Joseph", sched2, locRose, date2, "");

var instArray = [instMel, instXylon, instJules, instFrank, instJr, instKevin, instSarah, instArman, instGrace, instMarvin, instJuvy, instJoseph];

var ul = document.getElementById('instList');

function instStrings() {
    for (let i = 0; i < instArray.length; i++) {
        var li = document.createElement('li');
        li.id = `inst${instArray[i].name}`;
        li.className = "inst";

        var button = document.createElement('button');
        button.id = `inst${instArray[i].name}Button`;
        button.classList.add('instButton');

        var h2 = document.createElement('h2');
        h2.innerHTML = instArray[i].name;
        h2.classList.add('instName');

        var h3 = document.createElement('h3');
        h3.innerHTML = instArray[i].schedule;
        h3.classList.add('instSched');

        var h3_1 = document.createElement('h3');
        h3_1.innerHTML = instArray[i].place;
        h3_1.classList.add('instLoc');

        li.appendChild(h2);
        li.appendChild(h3);
        li.appendChild(h3_1);
        button.appendChild(li);
        ul.appendChild(button);

        button.onclick = function () {
            setInterval(computeTimeLeft(instArray[i]), 1000);
        }
    }
}

if (document.getElementById('instContainer')) {
    instStrings();
}

var countdownArray = [];

function computeTimeLeft(instArray) {
    var currentTime = new Date();
    var arrayDate = instArray.date;
    var interval = arrayDate - currentTime;
    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60)) / 1000);

    instArray.countdown = hours + "h until next zumba session.";

    console.log(days + 'd ' + hours + 'h ' + minutes + 'm ');
    console.log(arrayDate);
    console.log(instArray.name);

    countdownArray.push(instArray);
    console.log(countdownArray);
}

var ul_1 = document.getElementById('schedList');
var JSONarr;
var arr = [];
var storedArray;

function displayArraySched() {
    var x = countdownArray.length;
    var y = x - 1;

    arr.push(`<li>
    <p id="name">${countdownArray[y].name}</p>
    <p>${countdownArray[y].place}</p>
    <p>${countdownArray[y].schedule}</p>
    <p>${countdownArray[y].countdown}</p>
</li>`)

    var x_1 = arr.length;
    var y_1 = x_1 - 1;
    ul_1.innerHTML = arr[y];
    localStorage.clear();
    console.log(localStorage);
    localStorage.setItem('arr[y]', JSON.stringify(arr[y]));
    console.log(localStorage)
    
    console.log(arr.length);
}

var x = document.getElementsByClassName('instButton');
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', displayArraySched, false);
    x[i].addEventListener('click', displayNotif, false);
}

storage();

function storage() {
    var x = arr.length;
    var y = x - 1;
    storedArray = JSON.parse(localStorage.getItem('arr[y]'));
    
    ul_1.innerHTML = storedArray;
}


function displayNotif() {
    new Notification ("ZumBaguio!", {
        icon: "./stylesheet/images/pinkpuno.png",
        body: "You've added a new schedule for tomorrow's zumba!"
    });
}

