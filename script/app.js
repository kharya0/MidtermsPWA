var sched1 = "6:00 - 7:00";
var sched2 = "7:00 - 8:00";
var locSkating = "Near the Skating Rink";
var locPark = "Near the Children's Park";
var locSolibao = "Near Solibao";
var locRose = "Near the Rose Garden";
var date1 = new Date("April 6, 2018 6:00:00");
var date2 = new Date("April 6, 2018 7:00:00");
var hour1 = date1.getHours();
var hour2 = date2.getHours();
var min1 = date1.getMinutes();
var min2 = date2.getMinutes();
var currentDate = new Date();
var currentHours = currentDate.getHours();
var currentMin = currentDate.getMinutes();

function Instructor(name, schedule, location, hour, min) {
    this.name = name;
    this.schedule = schedule;
    this.location = location;
    this.hour = hour;
    this.min = min;
}

var instMel = new Instructor("Mel", sched1, locSkating, hour1, min1);
var instXylon = new Instructor("Xylon", sched1, locSkating, hour1, min1);
var instJules = new Instructor("Jules", sched1, locSkating, hour1, min1);
var instFrank = new Instructor("Frank", sched1, locPark, hour1, min1);
var instJr = new Instructor("JR", sched1, locPark, hour1, min1);
var instKevin = new Instructor("Kevin", sched1, locSolibao, hour1, min1);
var instSarah = new Instructor("Sarah", sched1, locSolibao, hour1, min1);
var instArman = new Instructor("Arman", sched2, locRose, hour2, min2);
var instGrace = new Instructor("Grace", sched2, locRose, hour2, min2);
var instMarvin = new Instructor("Marvin", sched2, locRose, hour2, min2);
var instJuvy = new Instructor("Juvy", sched2, locRose, hour2, min2);
var instJoseph = new Instructor("Joseph", sched2, locRose, hour2, min2);

var instArray = [instMel, instXylon, instJules, instFrank, instJr, instKevin, instSarah, instArman, instGrace, instMarvin, instJuvy, instJoseph];

var ul = document.getElementById('instList');

function instStrings() {
    for (let i = 0; i < instArray.length; i++) {
        var li = document.createElement('li');
        li.id = `inst${instArray[i].name}`;
        li.className = "inst";
        var button = document.createElement('button');
        button.id = `inst{instArray[i].name}Button`;
        button.className = "instButton";
        button.addEventListener('click', test);
        var h2 = document.createElement('h2');
        h2.innerHTML = instArray[i].name;
        h2.classList.add('instName');
        var h3 = document.createElement('h3');
        h3.innerHTML = instArray[i].schedule;
        h3.classList.add('instSched');
        var h3_1 = document.createElement('h3');
        h3_1.innerHTML = instArray[i].location;
        h3_1.classList.add('instLoc');

        li.appendChild(h2);
        li.appendChild(h3);
        li.appendChild(h3_1);
        button.appendChild(li);
        ul.appendChild(button);
    }
}

instStrings();

function test(){
    console.log("test");
}



