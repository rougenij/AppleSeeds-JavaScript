const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];


   for(let i  = 0; i < listOfNeighbours.length; i++){
       let neighbour1 = listOfNeighbours[i]
        for (let j= 0; j < neighbour1.length; j++){
            console.log('Neighbours:', neighbour1[j])
        }
    }