interface Player{
    position: string,
    twoPercent: number,
    threePercent: number,
    points:number,
    playerName?:string
}
let playerModel:Player = {
    points:10000,
    threePercent:40,
    twoPercent: 40,
    position: "PG"
} 


const BASE_URL = 'https://nbaserver-q21u.onrender.com/api/filter/'

async function getPlayer(player:Player):Promise<Player>{
    try{
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(player)
    });

    if (!response.ok){
        
        throw new Error("network error")
    }
    // console.log(BASE_URL);
    console.log(response);
    
        const playerList:Player = await response.json();
        
        console.log("player added", playerList)
        return playerList
    }catch(error){
        console.log("error", error);
        
        throw new Error;
        
    }
    
}


addEventListener('DOMContentLoaded', async ()=>{
  
    try {
        const data = await getPlayer(playerModel)
  console.log(data);
    } catch (error) {
        console.log(error);
        
    }
  
  
})