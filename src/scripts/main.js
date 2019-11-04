//For Of with Object.values()

const outputElement = document.querySelector("#app")
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const bill = {
        officeName: "Dr. White's Dentist Office",
        streetAddress: "9876 Glades Rd, Boca Raton, FL 33486",
        doctorName: "Dr. Kerri White",
        patientName: "Sam Pita",
        visitDate: "12/25/2019",
        amountBilled: 35.48,
        dueDate: "1/25/2019"
    }

console.log (bill[dateVisited], bill[owed], bill[patient])


console.log(Object.values(bill))


//For Of with Object.keys()
let domOutput = ""
const arrayOfKeys = Object.keys(bill)

for (const keyName of arrayOfKeys) {
    console.log(keyName)
    domOutput += `<span>${keyName}</span>`
}

//console.log(domOutput)

const containerRef = document.getElementById("app")
containerRef.innerHTML = `<section>${domOutput}</section>`


//For Of with Object.entries()
const dinner = {
    name: "pizza",
    size: "large",
    weight: "75 lbs",
    ethnicity: "Chicago",
    vegetarian: false
}

let dinnerDomOutput = ""

for (const keyValueArray of Object.entries(dinner)) {
    console.log(keyValueArray)
    dinnerDomOutput += `<p>Key: ${keyValueArray[0]} Value: ${keyValueArray[1]}</p>`
}

containerRef.innerHTML += `<article>${dinnerDomOutput}</article>`

