const people = [
    {
        name: 'John',
        age: 36,
        position: 'development',
    },
    {
        name: 'Mary',
        age: 40,
        position: 'arts', 
    },
    {
        name : 'Bob',
        age: 41,
        position: 'artists',
    }
]

//map over with callback (arrow function)

const newPeople = people.map((person) => {
    return {
        firstName : person.name,
        oldAge : person.age + 30
    }
})

console.log(newPeople)

// by reference

const getAges = (people) => people.age * 2 

const ages = people.map(getAges)
console.log(ages)


//