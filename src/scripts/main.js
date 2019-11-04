//For Of with Object.keys()

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


