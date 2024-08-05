//program podaje losowe zapisane wcześniej odpowiedzi
let userName = 'Marek'; //Podaj Twoje imię
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!"); //powitanie w zależności czy jest podana nazwa 
const userQuestion = "Czy jestem piękny i bogaty? ";  //tutaj wpisz swoje pytanie
console.log(userName + " pytanie brzmi: " + userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "To jest pewne";
    break;

  case 1:
    eightBall = "Zdecydowanie tak";
    break;

  case 2:
    eightBall = "Przyszłość jest mglista";
    break;

  case 3:
    eightBall = "Tego nikt nie wie";
    break;

  case 4:
    eightBall = "Tego nie możesz być pewny";
    break;

  case 5:
    eightBall = "Moje żródła mówią nie";
    break;

  case 6:
    eightBall = "Dobrze to nie wygląda";
    break;

  case 7:
    eightBall = "Wszystko wskazuje że tak";
    break;
};

if (userQuestion) {
  console.log('Magiczna kula mówi: ' + eightBall)
};





