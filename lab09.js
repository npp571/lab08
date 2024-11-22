//Question 1//
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna']
for (let i = 0; i<characters.length; i++){
    console.log(characters)
}

//Question 2//
let firstname = 'Harry'
let house = 'Gryffindor'
console.log(`Welcome, ${firstname} of ${house}`)

//Question 3//
let characterName = 'Hermione'
console.log(characterName.toUpperCase())
console.log(characterName.toLowerCase())

//Question 4//
let spell = ' Expelliarmus '
console.log(spell.trim())

//Question 5//
let quote = 'I solemnly swear that I am up to no good'
console.log(quote.slice(11,16))

//Question 6//
let firstName = 'Ron'
let lastName = 'Weasley'
console.log(firstName.concat( ' ',lastName))

//Question 7//
let sentence = "Draco is a good wizard"
console.log(sentence.replace('good', 'bad'))

//Question 8//
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw']
houses.push('Slytherin');
houses.pop()
console.log(houses)

//Question 9// 
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

//Question 10//
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid']
let sliceprof = professors.slice(1, 3)
console.log(sliceprof)

//Question 11//
let students = ['Neville', 'Seamus', 'Dean', 'Parvati']
students.splice(1,2);
console.log(students)

//Question 12//
let phrase = ' Mischief Managed '
console.log(phrase.trim().toLowerCase().concat('- Harry'))

//Question 13//
let wizards = ['Harry', 'Hermione', 'Ron']; 
wizards.push('Luna', 'Draco')
console.log(wizards)

//Question 14//
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
console.log(message.slice(11,19).concat(' Castle'))
