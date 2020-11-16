function recursiveSigma(n) {
    if (n == 0){
        return 0;
    }
    return n + recursiveSigma(n-1);
}

console.log(recursiveSigma(5));
// 5 => 5 + 4 + 3 + 2 + 1 => 15