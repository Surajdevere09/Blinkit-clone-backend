
async function veg_data(){


  try{
      let res = await fetch("http://localhost:5008/vegetable")

      let data = await res.json()
      
      return data

  }catch(e){
      console.log(e)
  }


}

async function  cold_drink(){


  try{
      let res = await fetch("http://localhost:5008/cold")

      let data = await res.json()
      
      return data

  }catch(e){
      console.log(e)
  }


}

async function  personalCare_data(){


  try{
      let res = await fetch("http://localhost:5008/personal")

      let data = await res.json()
      
      return data

  }catch(e){
      console.log(e)
  }


}
async function  grocery(){


  try{
      let res = await fetch("http://localhost:5008/grocery")

      let data = await res.json()
      
      return data

  }catch(e){
      console.log(e)
  }


}

  
  export { veg_data, cold_drink, personalCare_data, grocery };
  