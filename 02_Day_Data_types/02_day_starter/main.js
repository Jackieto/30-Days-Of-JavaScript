// this is your main.js script

//1
challenge = "30 Days of JavaScript"

//2
console.log(challenge)

//3
console.log("Size: " + challenge.length)

//4
challengeUpper = challenge.toUpperCase()
console.log("Uppercase: " + challengeUpper)

//5
challengeLOwer =  challenge.toLowerCase()
console.log("Lowercase: " + challengeLOwer)

//6
challengeSubstr = challenge.substr(3)
console.log("Substr first word: " + challengeSubstr)

//7
challengeSliced = challenge.slice(0,2)
console.log("Sliced out: " + challengeSliced)

//8
if(challenge.includes('Script')){
    console.log("Includes 'Script'?: " + true)
}else console.log(false)

//9
splittedToArray = challenge.split()
console.log(splittedToArray )

//10
splitted = challenge.split(" ")
console.log(splitted)

//11
companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
companiesArray = companies.split(',')
console.log(companiesArray)

//12
newChallenge = challenge.replace('JavaScript','Python')
console.log(newChallenge)

//13
console.log("Char at index 15 = " + challenge.charAt(15))

//14
console.log("CharCode of Char at index 15 = " + challenge.charCodeAt(15))

//15
console.log("First ocurrence of 'a': " + challenge.indexOf('a'))

//16
console.log("Last ocurrence of 'a': " + challenge.lastIndexOf('a'))

//17
sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log("First ocurrence of 'because' : " + sentence.indexOf('because'))

//18
console.log("Last ocurrence of 'because' : " + sentence.lastIndexOf('because'))

//19
console.log("First ocurrence of 'because' using search: " + sentence.search('because'))

//20
challengeTrimmed = challenge.trim()
console.log("Challenge trimmed: " + challengeTrimmed)

//21
console.log("Starts with 30? : " + challenge.startsWith('30'))

//22
console.log("Ends with JavaScript? : " + challenge.endsWith('JavaScript'))

//23
let aPositions = challenge.match(/a/g)
console.log("Positions of 'a': " + aPositions)

//24
days = '30 Days of '
javascript = 'Javascript'
concatenated = days.concat(javascript)
console.log(concatenated)

//25
console.log(challenge.repeat(2))



