'use strict';

let speakToGrandma = function(speak){
    if(speak === speak.toUpperCase()){
        console.log("NO, NOT SINCE 1938!");
        return "NO, NOT SINCE 1938!";
    } else {
        console.log("HUH?! SPEAK UP, SONNY!");
        return "HUH?! SPEAK UP, SONNY!";
    }
};

module.exports = speakToGrandma;