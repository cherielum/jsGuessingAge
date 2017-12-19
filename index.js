$(document).ready(function (){

    alert('I bet I can guess how old you are after obtaining two answers!')

    var yearToday = prompt ('What year is it today?')
    var yearOfBirth = prompt ('What is your birth year?')

    function calculateAge(yearOfBirth) {
        var age = yearToday-yearOfBirth;
        return age;
    }

    var age = calculateAge(yearOfBirth); 
    alert('Are you '+ age +' years old??');
})

//lecture functions
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth; 
    return age; //calling age function 
}

var ageJohn = calculateAge(1990);
var ageMelissa = calculateAge(1982);
console.log(ageJohn, ageMelissa);