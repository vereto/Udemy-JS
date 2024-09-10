const testScores = {
  Kristen: 80,
  Fani: 67,
  Nana: 39,
  Julia: 66,
  Maia: 100,
  Kalina: 102,
  Yana: 98,
  Natasha: 45,
  Silvia: 78,
};
// for( let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
