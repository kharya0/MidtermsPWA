var dateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function selectDate() {
    var select = document.getElementById('date');

    for (let i = 0; i < dateArray.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = dateArray[i];
        option.value = dateArray[i];

        select.appendChild(option);
    }
}

if (document.getElementById('dropdownContainer')) {
    selectDate();
}

var sched1 = "6:00 - 7:00";
var sched2 = "7:00 - 8:00";
var locSkating = "Near the Skating Rink";
var locPark = "Near the Children's Park";
var locSolibao = "Near Solibao";
var locRose = "Near the Rose Garden";

var chosenDay = document.getElementById("date").value;
var dateSched = new Date(chosenDay);

var date1 = new Date("April 6, 2018 6:00:00");
date1.setDate(dateSched.getDate());

var date2 = new Date("April 6, 2018 7:00:00");
date2.setDate(dateSched.getDate());

//var time1 = date1.getTime();
//var time2 = date2.getTime();

function Instructor(name, schedule, place, date) {
    this.name = name;
    this.schedule = schedule;
    this.place = place;
    this.date = date;
}

var instMel = new Instructor("Mel", sched1, locSkating, date1);
var instXylon = new Instructor("Xylon", sched1, locSkating, date1);
var instJules = new Instructor("Jules", sched1, locSkating, date1);
var instFrank = new Instructor("Frank", sched1, locPark, date1);
var instJr = new Instructor("JR", sched1, locPark, date1);
var instKevin = new Instructor("Kevin", sched1, locSolibao, date1);
var instSarah = new Instructor("Sarah", sched1, locSolibao, date1);
var instArman = new Instructor("Arman", sched2, locRose, date2);
var instGrace = new Instructor("Grace", sched2, locRose, date2);
var instMarvin = new Instructor("Marvin", sched2, locRose, date2);
var instJuvy = new Instructor("Juvy", sched2, locRose, date2);
var instJoseph = new Instructor("Joseph", sched2, locRose, date2);

var instArray = [instMel, instXylon, instJules, instFrank, instJr, instKevin, instSarah, instArman, instGrace, instMarvin, instJuvy, instJoseph];

var ul = document.getElementById('instList');

function instStrings() {
    for (let i = 0; i < instArray.length; i++) {
        var li = document.createElement('li');
        li.id = `inst${instArray[i].name}`;
        li.className = "inst";

        var a = document.createElement('a');
        //a.href = "../html/countdown.html";

        var button = document.createElement('button');
        button.id = `inst${instArray[i].name}Button`;
        button.className = "instButton";

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
        a.appendChild(button);
        ul.appendChild(a);

        button.onclick = function () {
            computeTimeLeft(instArray[i]);
        }
    }
}

if (document.getElementById('instContainer')) {
    instStrings();
}

var countdownDiv = document.getElementById('countdown');

function computeTimeLeft(instArray) {
    var currentTime = new Date();
    var arrayDate = instArray.date;
    var chosenDate = document.getElementById("date").value;
    arrayDate.setDate(chosenDate);
    var interval = arrayDate - currentTime;
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60)) / 1000);
    console.log(hours + 'h ' + minutes + 'm ' + seconds + 's ');
    console.log(arrayDate);

    var countdownArray = [];

    function Timer(name, place, date, time, countdown) {
        this.name = name;
        this.place = place;
        this.date = date;
        this.time = time;
        this.countdown = countdown;
    }
    var newSched = new Timer(instArray.name, instArray.place, arrayDate, (hours + 'h ' + minutes + 'm ' + seconds + 's'));

    countdownArray.push(newSched);
    console.log(countdownArray.name, countdownArray.place, countdownArray.date, countdownArray.time, countdownArray.countdown);
}
