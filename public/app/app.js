let value = document.getElementById("value");


let num = 0;

function addOne(){
    num +=1;
}

function updateValue(i){
    value.textContent = i;
}

function fb(num){
    if(num % 15 == 0){
        updateValue("FizzBuzz");
    }
    else if (num % 3 == 0){
        updateValue("Fizz");
    }
    else if (num % 5 == 0){
        updateValue("Buzz");
    }
    else{
        updateValue(num);
    }
}

function next(){
    addOne();
    fb(num);
}
nfkv