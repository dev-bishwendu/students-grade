
function showGreeting() {
    let studentName = document.getElementById("studentName").value;
    let mark = document.getElementById("studentMark").value;

    if (mark<100 && mark>=90) {
        var htmlContent = `<h1>Hello ${studentName}</h1>
        <p>Your mark is ${mark} & your grade is A+</p>`;
        let greeting = document.getElementById("greetingBox").innerHTML = htmlContent;
    }
    else if (mark<90 && mark>=80) {
        var htmlContent = `<h1>Hello ${studentName}</h1>
        <p>Your mark is ${mark} & your grade is A</p>`;
        let greeting = document.getElementById("greetingBox").innerHTML = htmlContent;
    }
    else if (mark<80 && mark>=70) {
        var htmlContent = `<h1>Hello ${studentName}</h1>
        <p>Your mark is ${mark} & your grade is B</p>`;
        let greeting = document.getElementById("greetingBox").innerHTML = htmlContent;
    }
    else if (mark<70 && mark>=60) {
        var htmlContent = `<h1>Hello ${studentName}</h1>
        <p>Your mark is ${mark} & your grade is C</p>`;
        let greeting = document.getElementById("greetingBox").innerHTML = htmlContent;
    }
    else if (mark<60 && mark>=50) {
        var htmlContent = `<h1>Hello ${studentName}</h1>
        <p>Your mark is ${mark} & your grade is D</p>`;
        let greeting = document.getElementById("greetingBox").innerHTML = htmlContent;
    }
    else {
        var htmlContent = `<h1>Hello ${studentName}</h1>
        <p>Your mark is ${mark} & your grade is F</p>`;
        let greeting = document.getElementById("greetingBox").innerHTML = htmlContent;
    }
    
};