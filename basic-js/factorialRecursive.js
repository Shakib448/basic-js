// for (var i = 10; i>=1; i--){

// }

// var i = 0;

// while(i <= 10){
//     i++;
// }

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

var result = factorial(5);

console.log(result);