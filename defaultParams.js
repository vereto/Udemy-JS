function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides)+ 1;
}
//spread operator
const arrNum = [5,3,65,87,89,90,6,123,34];

const cats = ['Rusty','Blue','Scott'];
const dogs = ['Ivan','Nashta'];

const allPets = [1,2,3,8,...cats,...dogs,'Nana'];
 console.log(allPets);

 //spread operator with Objects

//  const feline = { legs: 4, family: 'Felidae'};
//  const canine = {isFurry: true, family: 'Caninae'}

//  const catDogs = {...feline,...canine};

//  const arrayNum = [5,3,65,87,89,90,6,123,34];
//  const arrIntoObj = {...arrayNum};

 //rest operator

 function sum(...nums) {
    const ordered = nums.sort((a,b)=> a - b);
    return ordered
 }
 
 //destructuring
 const arrayPoints = [53,93,65,87,89,90,69,123,34];

 const highestScore = arrayPoints[0];
 const secondScore = arrayPoints[1];

 const [gold,silver,...theRestPoints] = arrayPoints;
 console.log([gold,silver]);
 console.log(theRestPoints);

 const user = {
    email: 'thenew@gmail.com',
    password: 'sTd2WRF45',
    firstName: 'Nana',
    lastName: 'Karakon',
    born: 1980,
    died: 2065,
    city: 'Madrid'
 }
 //const firstName = user.firstName;
 //const email = user.email;

 //const{email,firstName,lastName} = user;
  function fullName({firstName,lastName,email}) {
    return `${firstName} ${lastName} - email: ${email}`
  }

 //rename it :
 const {born: birthYear} = user
 
 //default value =
 const {dies, city, state = 'N/A'} = user