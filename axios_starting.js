// axios.get ("https://swapi.dev/api/people/1").then((res)=>{
//     console.log('RESPONSE:',res);
// })
// .catch((e)=>{
//     console.log('ERROR:',e);
    
// })
const getStarWarsPerson = async (id) => {
    try {
         const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
    console.log(res.data);
        
    } catch (error) {
        console.log(error);
        
    }
   
    
}
getStarWarsPerson(5)