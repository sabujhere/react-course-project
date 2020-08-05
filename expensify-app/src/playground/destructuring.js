// const person = {
//     name:'Andrew',
//     age: 26,
//     location: {
//         city:'Chicago',
//         temp: 65
//     }
// }

// const {name, age} = person
// console.log(`${name} is ${age}`)


const book = {
    title:'Ego is the Enemy',
    author: 'Ryan',
    publisher: {
        name:'Penguin'
    }
}

const { name : publisherName ='Self-Publish'} = book.publisher

console.log(publisherName)