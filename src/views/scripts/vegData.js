




async function veg_data(){


    try{
        let res = await fetch("http://localhost:5008/vegetable")
 
        let data = await res.json()
        
        return data

    }catch(e){
        console.log(e)
    }


}


  

    export default veg_data;