/* Modifying the addScore function to only add 10 points to the first 3 players.
*/

function addScore(players) {
    const playerScores = players.map(function(x, i){
                
                if(i<=2){
                x.score += 10;
                
            }
        return x;
        
    });
    return playerScores;
    
   
}
module.exports = addScore;