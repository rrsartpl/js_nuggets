const staff = [
    { name: 'bob', age: 20, position:'developer', salary: 100},
    { name: 'peter', age: 20, position:'designer', salary: 300},
    { name: 'susy', age: 20, position:'the boss', salary: 400},
    { name: 'anna', age: 20, position:'intern', salary: 10},
]

const dailyTotal = staff.reduce((total,person)=>{
    console.log(total)
    console.log(person.salary + "\n person.salary :")
    total += person.salary
    return total
},0)

console.log(dailyTotal)