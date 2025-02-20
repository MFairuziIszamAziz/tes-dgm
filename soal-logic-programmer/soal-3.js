function hitungHuruf(input){
    let jumlahHuruf = {}
    
    for (let i=0; i < input.length; i++){
        let huruf = input[i];

        if (huruf === " ") continue;
        
        if(jumlahHuruf[huruf]){
            jumlahHuruf[huruf]++;
        } else {
            jumlahHuruf[huruf] = 1;
        }
    }
    
    let hasil = Object.keys(jumlahHuruf).sort((a,b) => {
    if  (a.toLowerCase() === b.toLowerCase()){
        return a.charCodeAt(0) - b.charCodeAt(0);
    }

    return a.toLowerCase().localeCompare(b.toLowerCase(), undefined, {sensitivity: 'variant'});

    })
    console.log(hasil.map(huruf =>`${huruf} : ${jumlahHuruf[huruf]}`))
}

// hitungHuruf("Hello World")
// hitungHuruf("Bismillah")
hitungHuruf("MasyaAllah")