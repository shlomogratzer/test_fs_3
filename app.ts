interface Player{
    position: string,
    twoPercent: number,
    threePercent: number,
    points:number,
    playerName?:string
}


interface PlayerRespons{
age: number
games : number
playerName : string
points: number
position: string
season : []
team : string
threePercent : number
twoPercent: number
__v : number
_id : string
}

const BASE_URL = 'https://nbaserver-q21u.onrender.com/api/filter/'

async function getPlayer(player:Player):Promise<Player[]>{
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
        const playerList: PlayerRespons[] = await response.json();

        const players:Player[] = []
        playerList.forEach(player =>{

            let newPlayer:Player = {
                points:player.points,
                threePercent: player.threePercent,
                twoPercent: player.twoPercent,
                position: player.position
            }
            players.push(newPlayer)
        })
        return playerList
    }catch(error){
        console.log("error", error);
        
        throw new Error;
        
    }
    
}
const chooseBtn = document.querySelector('#choose-btn') as HTMLButtonElement
chooseBtn.addEventListener('click', async()=>{
    const rolePlayer = document.querySelector('#role-player') as HTMLSelectElement
    const points = document.querySelector('#points') as HTMLInputElement
    const FG = document.querySelector('#FG') as HTMLInputElement
    const treeP = document.querySelector('#tree') as HTMLInputElement

    const newPlayers:Player = {
        points:parseInt(points.value),
        threePercent:parseInt(treeP.value),
        twoPercent: parseInt(FG.value),
        position: rolePlayer.value
    }
    renderData(newPlayers)
}) 

const renderData = async(nweplayersetings:Player):Promise<void> =>{

    const result =  await getPlayer(nweplayersetings)
    
    
    const tbody = document.querySelector('tbody') as HTMLTableSectionElement
    
    tbody.innerHTML = '';

    result.forEach(player => {
        const row = document.createElement('tr')

        const nameCell = document.createElement('td') 
        const PositionCell = document.createElement('td')
        const PointsCell = document.createElement('td')
        const FGCell = document.createElement('td')
        const treePCell = document.createElement('td')
        const actionsCell = document.createElement('td')

        nameCell.innerHTML = `${player.playerName}`
        PositionCell.innerHTML = `${player.position}`
        PointsCell.innerHTML = `${player.points}`
        FGCell.innerHTML = `${player.twoPercent}`
        treePCell.innerHTML = `${player.threePercent}`


        
        const editBtn = document.createElement('button') as HTMLButtonElement

        editBtn.innerText = 'edit'
        editBtn.addEventListener('click',()=>{
            const playerElement = document.querySelector(`#${player.position}`)
            const list = document.createElement('ul')

            const name = document.createElement('li')
            const points = document.createElement('li')
            const position = document.createElement('li')
            const FG = document.createElement('li')
            const treeP = document.createElement('li')

            name.innerHTML = `name: ${player.playerName}`
            points.innerHTML = `points: ${player.points}`
            position.innerHTML = `position: ${player.position}`
            FG.innerHTML = `FG: ${player.twoPercent}`
            treeP.innerHTML = `treeP: ${player.threePercent}`

            list.appendChild(name)
            list.appendChild(points)
            list.appendChild(position)
            list.appendChild(FG)
            list.appendChild(treeP)

            playerElement?.appendChild(list)

        })

        actionsCell.appendChild(editBtn)

        row.appendChild(nameCell)
        row.appendChild(PositionCell)
        row.appendChild(PointsCell)
        row.appendChild(FGCell)
        row.appendChild(treePCell)
        row.appendChild(actionsCell)

        tbody.appendChild(row)
    });

}


