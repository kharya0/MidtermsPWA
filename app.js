var body = document.querySelector('body');

var instructorProfiles, profileJSON;

instructorProfiles = {
    instructor: [
        instID: [
            idNo: 1,
            name: 'asnaoga'
        ],
        sched1: [
            day: 'Tuesday',
            time: [
                timeID: 1,
                timeDisplay: '6:00 - 7:00'
            ]
        ]
    ]
};

function display(profile) {
    return `
        <div class="instructors">
            <h1>${profile.id.name}</h1>
        </div>
        `;
};

function test() {
    profileJSON = instructorProfiles.json();

    main.innerHTML = profileJSON.instructor.map(display).join('\n');
}

window.addEventListener('load', function (e) {
    test();
});