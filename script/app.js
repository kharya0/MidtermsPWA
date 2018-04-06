var sched1 = "6:00 - 7:00";
var sched2 = "7:00 - 8:00";
var locSkating = "Near the Skating Rink";
var locPark = "Near the Children's Park";
var locSolibao = "Near Solibao";
var locRose = "Near the Rose Garden";
var time1 = new Date("April 6, 2018 6:00:00");
var time2 = new Date("April 6, 2018 7:00:00");

function Instructor(name, schedule, location, time) {
    this.name = name;
    this.schedule = schedule;
    this.location = location;
    this.time = time;
}

var instMel = new Instructor("Mel", sched1, locSkating, time1.getHours());
var instXylon = new Instructor("Xylon", sched1, locSkating, time1.getHours());
var instJules = new Instructor("Jules", sched1, locSkating, time1.getHours());
var instFrank = new Instructor("Frank", sched1, locPark, time1.getHours());
var instJr = new Instructor("JR", sched1, locPark, time1.getHours());
var instKevin = new Instructor("Kevin", sched1, locSolibao, time1.getHours());
var instSarah = new Instructor("Sarah", sched1, locSolibao, time1.getHours());
var instArman = new Instructor("Arman", sched2, locRose, time2.getHours());
var instGrace = new Instructor("Grace", sched2, locRose, time2.getHours());
var instMarvin = new Instructor("Marvin", sched2, locRose, time2.getHours());
var instJuvy = new Instructor("Juvy", sched2, locRose, time2.getHours());
var instJoseph = new Instructor("Joseph", sched2, locRose, time2.getHours());

function instString (i){
    var intString = `
        <div class="instructor">
            <h1 class="instName">
                ${i.name}
            </h1>
            <h2 class="instSched">
                ${i.schedule}
            </h2>
            <h2 id="instLoc">
                ${i.location}
            </h2>
        </div>
`
}




