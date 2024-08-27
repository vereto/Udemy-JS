const subreddits = [
  "cringe",
  "book",
  "chickens",
  "funny",
  "pics",
  "soccer",
  "dunners",
];

for (const sub of subreddits) {
  // console.log(sub);
}
const seatingChart = [
  ["Kristen", "Fani", "Nana"],
  ["Julia", "Maia", "Simeon", "Kaloyan"],
  ["Eli", "Ico", "Kalina", "Yana"],
];
for (const row of seatingChart) {
  for (const name of row) {
    //console.log(name);
  }
}

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers){
    //console.log(num * num)
}
const testScores = {
    Kristen: 80,
    Fani: 67,
    Nana: 39,
    Julia:66,
    Maia:100,
    Kalina:102,
    Yana:98
}
for (let person in testScores){
    console.log(`${person} score ${testScores[person]}`);
}