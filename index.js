// code your solution here


function superbowlWin(record){
    for (let champs of record) {
        if(champs.result === "W"){
            return champs.year
        }
    }
}