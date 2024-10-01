// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow(){
//         console.log(`${this.name} says Meowwww`);
//     }
// }
// const meow2 = cat.meow;

// const hen = {
//     name:'Helen',
//     eggCount: 0,
//     layAnEgg: function (){
//         this.eggCount +=1
//              return 'EGG'
//     }
// }
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(()=>{
            console.log(this.fullName);
        }, 3000)
    }
}