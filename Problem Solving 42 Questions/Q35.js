function printInvertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* '; 
        }
        console.log(row.trim()); 
    }
}

const n = 5;
printInvertedTriangle(n);
