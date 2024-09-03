// function isShortsWeather (temperature){
//     if(temperature >= 75){
//         return true
//     }return false
// }
// isShortsWeather()

// ................................
// function lastElement(arr) {
//   if (arr.length === 0) {
//     return null;
//   } 
//   for (let i = 0; i < arr.length - 1; i--) {
//     return (arr.length - 1);
//   }
// }
// console.log(lastElement([4444,30]));

//.................
// function returnDay(num) {
//     if(num <= 0 ||  num > 7){
//         return null;
//     } 
//      const daysOfTheWeek = {
//         1: "Monday",
//         2: "Tuesday",
//         3: "Wednesday",
//         4: "Thursday",
//         5: "Friday",
//         6: "Saturday",
//         7: "Sunday"
//      }
//      let wantedDay = ''
//      for (const key in daysOfTheWeek) {
//        let days = Object.values(daysOfTheWeek);
//        for (let val = 0; val < days.length; val++) {
//         wantedDay = days[num - 1];
       
//        }
//      }
//      return (`"${wantedDay}"`);
// }console.log(returnDay(6));

//..............................

// function returnDay(num) {
//   if(num <= 0 ||  num > 7){
//       return null;
//   } 
//    const daysOfTheWeek = {
//       1: "Monday",
//       2: "Tuesday",
//       3: "Wednesday",
//       4: "Thursday",
//       5: "Friday",
//       6: "Saturday",
//       7: "Sunday"
//    }
 
//    return daysOfTheWeek[num]
//   }console.log(returnDay(2))

//.........................

// function returnDay(num) {
//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday']
//   if(num <= 0 ||  num > 7){
//          return null;
//   }else{
//     return days[num - 1];
//   }
// }
//..................................

function returnDay(num) {
    const days = [null,'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday']
    
    //const day = days[num - 1];
    // return day ? day : null;
    if(num <= 0 ||  num > 7){
      return null;  
 }
    return days[num];
  }
console.log(returnDay(0))