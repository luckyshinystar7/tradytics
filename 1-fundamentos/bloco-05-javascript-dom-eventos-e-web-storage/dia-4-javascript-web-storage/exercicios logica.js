6. Enésimo Primo:


function nth_prime(n) {
    // Write your code here
    function confirmaPrimo (x) {
        let c = 0;
        for (let i = 2 ; i < x ; i+= 1) {
            if (x % i == 0) {
                c += 1;
            }
        }
        if (c == 0) {
            return true;
        } return false; 
    }
    let arrayPrimos = [2];
    for (let i = 3 ; arrayPrimos.length < n ; i += 1) {
        if (confirmaPrimo(i)) {
            arrayPrimos.push(i);
        }
    }
    return arrayPrimos[n-1];
}