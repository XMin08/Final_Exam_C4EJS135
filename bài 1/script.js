



function sumPrimes(){
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    var sum = 0;

    const text_error = document.getElementById("error")
    const text_result = document.getElementById("result");
    
    if(text_error.classList.item(1) == "active"){
        text_error.classList.remove("active");
    }
    if(text_result.classList.item(1) == "active"){
        text_result.classList.remove("active");
    }

    if(a > b){
        text_error.classList.add("active");
    }
    else{
        for(let i = a; i <= b; i++){
            
            if(checkPrime(i)){
                sum = sum + i;
            }
        }
        
        text_result.classList.add("active");
        text_result.innerHTML = "Tổng là : " + String(sum);
    }
}
// false: không phải só nguyên tố
// true : là số nguyên tố
function checkPrime(number){

    if(number < 2){
        return false;
    }
    else if(number == 2){
        return true;
    }
    else if(number % 2 == 0){
        return false;
    }
    else{
        for(var i = 3; i < number; i+=2){

            if(number % i === 0){
                return false;
            }
        }
    }

    return true;
}