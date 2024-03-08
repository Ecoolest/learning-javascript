

// String concatenation //



const firstNameA = "Daniel"
const lastNameA = "Reed"
const subjectA = "Maths"
const subjectB = "English"
const scoreA = "85"
const scoreB = "75"
const aggregate = "160"




const firstNameB = "Michael"
const lastNameB = "King"
const subjectC = "Maths"
const subjectD = "English"
const scoreC = "70"
const scoreD = "75"
const aggregateA = "145"



const firstNameC = "Sarah"
const lastNameC = "Conner"
const subjectE = "Maths"
const subjectF = "English"
const scoreE = "65"
const scoreF = "75"
const aggregateB = "140"




const messageA = `For ${firstNameA} ${lastNameA} your Score for ${subjectA} is ${scoreA} and for ${subjectB} is ${scoreB} so therefore your total score is ${aggregate}`

console.log(messageA)

const messageB = `For ${firstNameB} ${lastNameB} your Score for ${subjectC} is ${scoreC} and for ${subjectD} is ${scoreD} so therefore your total score is ${aggregateA}`
 
console.log(messageB)


const messageC = `For ${firstNameC} ${lastNameC} your Score for ${subjectE} is ${scoreE} and for ${subjectF} is ${scoreF} so therefore your total score is ${aggregate}`

console.log(messageC)



const a = 5
const o = 3
const c = 2
const d = a**2 + o**2 

console.log(d)

//circumference of a circle//
 
const e = Math.PI
const r = 3
 
const g = 2*e*r

console.log(g)


//Area of circle //

const f = Math.PI
const i = 2

const j = f*i**2

console.log(j)

//Area of a triangle //

const b = 2
const h = 3

const m = b*h/2

console.log(m)


const ab = Math.floor(Math.random()*200000)

const id = `Trans-${ab}`

console.log(id)



const kk = Math.floor(Math.random()*30000)

const mm = `Matno=UG/${kk}`

console.log(mm)


const ll = Math.floor(Math.random()*30000)

const kl = `Matno=UG/${ll}`

console.log(kl)



// Array // 


const min = [ "hannah", "john","sarah","junior", "vivtor", "patrick"]
const len = [ 45, 56 , 76, 67, 78, 89]
const pin = [ true , false ,true, false, true ]

const gud = min.indexOf( "hannah")
console.log(gud)

const sad = len.indexOf( 76 )
console.log(sad)

len.push("tommy", "door" , false, 34)

console.log(len)


const rain = len.join(" ")

console.log(rain)




const personA = { 
    firstname: "Andrew ",
    middlename: "reed",
    state: "delta",
    class: "jss1",
    school: "iron heights",
    age: "12years old"

}

const personB = {
    firstname: "sophia",
    lastname: "carol",
    school: "odin college",
    class: "jss3",
    age: "13years old"

}

const personC = {
    firstname: "tony",
    lastname: "black",
    school: "redeem college",
    class: "jss2",
    age: "12years"

}

const phone = {
    brand: "iphone",
    model: "13promax",
    color: "black",


}


const car = { 
    brand: "toyota",
    model: "camry",
    color: "red",


}



const word = `The top three students in the cowbell competition are ${personC.firstname} ${personC.lastname} from ${personC.school} ${personC.age}, who came third has won a brandnew ${phone.brand} ${phone.model} 
and the runner-up goes to ${personB.firstname} ${personB.lastname} all the way from ${personB.school},the ${personB.age} who has won a brandnew ${phone.brand} ${phone.model} and lastly what we have all be waiting for the winner of the brandnew ${car.brand} ${car.model} representing
 ${personA.school} the ${personA.age} is.... ${personA.firstname}${personA.middlename}`


console.log(word)
















