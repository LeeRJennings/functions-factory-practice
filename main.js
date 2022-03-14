//============================================Lightning Exercise 1============================================
const doctors = []

const createDoc = (name, specialty, address) => {
    const newDoc = {
        "specialty": specialty,
        "name": name,
        "address": address
    }
    
    doctors.push(newDoc)
} 

createDoc("Dr. Rigby", "pediatrician", "123 Street Rd")
createDoc("Dr. Dude", "optometrist", "321 Road St")
// console.log(doctors)

//============================================Lightning Exercise 2============================================
const bowWowKennels = []

const createPet = (name, breed) => ({
    "name": name,
    "breed": breed
})

bowWowKennels.push(createPet("Davos", "Grey Tabby Cat"))
bowWowKennels.push(createPet("Daisy", "Golden Retreiver"))
bowWowKennels.push(createPet("Phoebe", "Shih Tzu"))
// console.log(bowWowKennels)

//============================================Music Row============================================
const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []

const createArtist = (name, age, genre) => {
    const newArtist = {
        "name": name,
        "age": age,
        "genre": genre
    }

    if (newArtist.genre === "funk" || newArtist.genre === "rap") {
        jumpStopRecords.push(newArtist)
    } else if (newArtist.genre === "country" || newArtist.genre === "bluegrass") {
        chattenRecords.push(newArtist)
    } else if (newArtist.genre === "pop") {
        polarRecords.push(newArtist)
    } else {
        console.log("In this scenario the only genres in existence are funk, rap, country, bluegrass, and pop.")
    }
}

createArtist("Bruce Atikins", 23, "country")
createArtist("Jensen Brown", 20, "pop")
createArtist("Dre Funkz", 25, "funk")
createArtist("Dusta Grimes", 21, "rap")
createArtist("Bartholomew Danielson", 23, "bluegrass")
createArtist("Avilee Dallas", 19, "country")
createArtist("Austin Kinkaid", 22, "pop")
createArtist("Loyonce Branis", 27, "rap")
createArtist("Ser Lady Davos the Cat", 3.5, "meows")

console.log("JumpStop Records Presents:", jumpStopRecords)
console.log("Chatten Records Presents:", chattenRecords)
console.log("Polar Records Presents:", polarRecords)