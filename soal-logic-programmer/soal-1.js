let arr = [12,9,30,'A','M',99,82,'J','N','B'];

arr.sort ((a,b)=>{
    if (typeof a === "string" && typeof b === 'string'){
        return a.localeCompare(b);
    }
    if (typeof a === "number" && typeof b === 'number'){
        return a-b;
    }
    return typeof a === "string" ? -1 : 1;
});

console.log(arr)