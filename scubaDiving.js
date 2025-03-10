/*We need a function that can determine if the diver can breathe. The function canBreathe will be passed three boolean values:

    isConnected - Is true if the diver connected to the tank
    hasOxygen - Is true if the tank has oxygen
    aboveWater - Is true if the diver is still above water

If the diver is still aboveWater, they can breathe regardless of the tank connection and oxygen*/

function canBreathe(isConnected, hasOxygen, aboveWater){
    return aboveWater || isConnected && hasOxygen;
}
module.exports = canBreathe;