let arrayOfNumbers = [10, 20, 5, 8, 9, 10, 2, 3, 8, 6, 9]

const checkedSumNaive = (numb, array) => {
    let total;
    for(let i=0; i < array.length - 1 ; i++){
        let result = array[i]
        let search = array.slice(i+1, array.length).find( el => el == numb - array[i])
        total = result + search
        if(total == numb){
            return true;
        }
    } 
    return false;
}

console.log(checkedSumNaive (5, arrayOfNumbers)) // Result = True
console.log(checkedSumNaive (10, arrayOfNumbers)) // Result = True
console.log(checkedSumNaive (4, arrayOfNumbers)) // Result = False
console.log(checkedSumNaive (17, arrayOfNumbers)) // Result = True
console.log(checkedSumNaive (3, arrayOfNumbers)) // Result = False
console.log(checkedSumNaive (1, arrayOfNumbers)) // Result = False

const checkedSum = (numb, array) => {
    let total;
    const filterArray = array.filter( el => el <= numb);
    if(filterArray.length >= 2){
        for(let i=0; i < filterArray.length - 1; i++){
            total = filterArray[i] + filterArray.slice(i+1, filterArray.length).find( el => el == numb - filterArray[i])
            if(total == numb){
                return true;
            }
        }
        return false;
    }else{
        return false;
    }
}

console.log(checkedSum (5, arrayOfNumbers)) // Result = True
console.log(checkedSum (10, arrayOfNumbers)) // Result = True
console.log(checkedSum (4, arrayOfNumbers)) // Result = False
console.log(checkedSum (17, arrayOfNumbers)) // Result = True
console.log(checkedSum (3, arrayOfNumbers)) // Result = False
console.log(checkedSum (1, arrayOfNumbers)) // Result = False

