let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0

for (let key in salaries) {
    if (salaries[key].hasOwnProperty) {
        sum = sum + salaries[key]
    }
}


// const arrVal = Object.values(salaries)

// for(let i = 0; i < arrVal.length; i++){
//   sum = sum + arrVal[i]
// }

// arrVal.forEach((elem)=>{
//     sum = sum + elem
// })


// sum = Object.values(salaries).reduce((acc, cur) => acc + cur, 0)

console.log('sum', sum)