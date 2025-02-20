function pattern_count(teks, pattern){
    if (!teks || !pattern) return console.log(0);
    
        let hitung_pat = 0;
        let teksLength = teks.length;
        let patLength = pattern.length;
    
        for (let i=0; i<=teksLength - patLength; i++){
            let cocok = true
    
            for (let j=0; j<patLength; j++){
                if (teks[i+j] != pattern[j]){
                    cocok = false;
                    break;
                }
            }
            if (cocok) hitung_pat++;
        }
        console.log(hitung_pat);
    }
    
    pattern_count('palindrom', 'ind')
    pattern_count('abakadabra', 'ab')
    pattern_count('hello', '')
    pattern_count('ababab', 'aba')
    pattern_count('aaaaaa', 'aa')
    pattern_count('hell', 'hello')