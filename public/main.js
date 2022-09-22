let button = document.getElementById("adder");

let num = 0;

function addOne(){
    num +=1;
}

function next(){
    addOne();
    if(num % 15 == 0){
        console.log("FizzBuzz");
    }
    else if (num % 3 == 0){
        console.log("Fizz");
    }
    else if (num % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
}
