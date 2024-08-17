fetch("https://swapi.dev/api/people/1")
.then(res =>{
    console.log('RESOLVED!',res);
})
.catch((e)=>{
    console.log('error!', e);
    
})