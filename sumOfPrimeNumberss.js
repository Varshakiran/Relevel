function isPrime(N) {
    for(let i=2;i<N-1;i++){
        if(N%i === 0) {
            return false;
        }
    }
   return true;
}

function pairPrime(N) {
    for(let a=2;a<N-1;a++) {
        let b = N-a;
        if(isPrime(a) && isPrime(b)) {
            return[a,b];
        }
    }
    return "no output";
}
console.log(pairPrime(15));