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


console.log('sum', sum)