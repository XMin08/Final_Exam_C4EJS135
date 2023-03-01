function numberOneTriangle(number){
    if(number < 1 || number > 10){
        console.log("Error number input");
    }

    for(let i = 1 ; i <= number; i++){
        
        let str = ""
        for(let j = 0; j < i; j++){
            str += "*"
        }
        console.log(str);
    }
}

for(var i = 2; i <= 10; i++){
    console.log("Triangle " + i);
    numberOneTriangle(i);
}