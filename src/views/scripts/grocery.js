




async function groceryData(){


    try{
        let res = await fetch("http://localhost:5008/grocery")
 
        let data = await res.json()
        
        return data

    }catch(e){
        console.log(e)
    }


}


  

   
export default groceryData;