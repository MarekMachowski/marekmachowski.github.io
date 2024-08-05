//program nadaje numerację zawodnika i godzinę startu w zależności od wieku i rejestracji
let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegisteredEarly = false;
let runnersAge = 122;

if (runnersAge > 18 && !runnerRegisteredEarly) {
  raceNumber += 1000;
};
if (runnersAge > 18 && !runnerRegisteredEarly) {
  console.log("The race starts at 9:30 am " + raceNumber);
}
else if (runnersAge > 18 && !runnerRegisteredEarly) {console.log("The race starts at 11:00 am " + raceNumber)} ;

if (runnersAge < 18) {console.log ("The race starts at 12:30 am " + raceNumber)};





