/* Given an array of players, add 10 to their score. Return a new array with these additional points.

Each player will be an object with the following two properties:

    id - a number uniquely identifying the player
    score - a number representing the player's points

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