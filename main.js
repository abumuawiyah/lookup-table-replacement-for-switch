(function(){
    'use strict';
    
    //using if - else if
    if(index === 1){
        number = 1;
    }
    else if(index === 2){
        number = 2;
    }
    else if(index === 3){
        number = 3;
    }
    else if(index === 4){
        number = 4;
    }
    else if(index === 5){
        number = 5;
    }
    else {
        number = 0;
    }
    
    //using switch
    switch(index){
        case 1: number = 1; break;
        case 2: number = 2; break;
        case 3: number = 3; break;
        case 4: number = 4; break;
        case 5: number = 5; break;
        default: number = 0; break;
    }
    
    //using lookup table

    var lookup = function(){                        
        return ({
            '0': 1,
            '1': 1,
            '2': 1,
            '3': 1,
            '4': 1,
            '5': 1,
            get: function(index){
                return this[index]();
            }
        }).get(index);
    }();
    
}());