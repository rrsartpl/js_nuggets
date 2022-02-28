const people = [
    {name: 'John', age: 20, position: 'developer'}, 
    {name:'Peter',age: 25, position : 'designer'},
    {name: 'Susy', age :30 , position : 'the boss'},
    {name: 'Anna', age: 35, position : 'intern'}
]


// filter methods 

const youngPeople = people.filter((person) => {
    // if (person.age < 30) {
    //    return person
    // }
    return person.age < 30
})

console.log(youngPeople)

// filter, alternative methods

const developers = people.filter((person) => {
    person.position === 'developer' 
})
console.log(developers)