const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (
  let i = 0;
  i < input.length;
  i++ //console.log(i) //console.log();
) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === "e") {
        resultArray.push(input[i]);
      }
      if (input[i] === "u") {
        resultArray.push(input[i]);
      }
      resultArray.push(input[i]);
    }
  }
}
let resultString = resultArray.join("");


 
console.log(resultString.toUpperCase());
