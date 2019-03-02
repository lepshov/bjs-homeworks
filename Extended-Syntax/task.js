
"use strict"
function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    a = 2;
    b = 4;
    c = -3;
    let diskriminant = b**2 - (4*a*c);
    console.log(diskriminant);

    if (diskriminant < 0) {
        console.log ("Дискриминант меньше нуля, корней нет!");
    }

    if  (diskriminant = 0) {
        console.log ("Дискриминант равен нулю, один корень!");
    }

    else (diskriminant > 0) 
        console.log ("Дискриминант больше нуля, два корня!");
    
    let formula1 = (-b + Math.sqrt(diskriminant)) / (2 * a)
    console.log(formula1);

    let formula2 = (-b - Math.sqrt(diskriminant)) / (2 * a)
    console.log(formula2);

    return [formula1, formula2];
}
getResult();

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}