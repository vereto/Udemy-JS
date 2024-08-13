const fakeRequest = (url)=>{
    return new Promise((resolve,reject)=>{
        const ran = Math.random();
        setTimeout(()=>{
            if( ran < 0.6){
                resolve('Your fake date HERE')
            }
            reject('Request ERROR')
        },1000)
    })
}
fakeRequest('/dogs/1')
.then((data)=>{
    console.log('DONE WITH REQUEST!');
    console.log('DATA IS:', data);
    
    
})
.catch((err)=>{
    console.log('OH NO!', err);
    
})