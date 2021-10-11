// https://reader.codaisseur.com/courses/beginner-bootcamp/02-js-basics-3/03-arrays-and-objects/03-practice Borrowed a codaisseur account from friend 

const patients = require("./patients");
const firstPatient = patients[0];
firstPatient.age = 35
firstPatient.weight = 68
firstPatient.height = 1.78

let fullName = `${firstPatient.firstName} ${firstPatient.lastName}`
console.log(fullName)

if (firstPatient.dailyExercise = true)
    {
    console.log('Yes he exercise')}
    else{
    console.log('No the person did not')
    }


//For loop
const patients = require("./patients");

for ( i = 0; i < patients.length; i++){
    console.log (`Index number ${i}`)
    console.log (patients[i].firstName + " " + patients[i].lastName)
}


//for each exercise
const nicknames = ["David", "Rein", "Jeroen"];
function greet(nicknames) {
  console.log(`Hi ${nicknames}`);
}
nicknames.forEach(greet);

