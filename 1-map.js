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

const newPeople = people.map((person) => {
    return {
        firstName : person.name,
        oldAge : person.age + 30
    }
})

console.log(newPeople)