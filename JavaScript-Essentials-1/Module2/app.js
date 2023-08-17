//Lab1

let firstPersonName = "Maxwell Wright";
let secondPersonName = "Raja Villarreal";
let thirdPersonName = "Helen Richards";

let firstPersonPhone = "(0191) 719 6495";
let secondPersonPhone = "08663982895";
let thirdPersonPhone = "08001111";

let firstPersonEmail = "Curabitur.egestas.nunc@nonummyac.co.uk";
let secondPersonEmail =	"posuere.vulputate@sed.com";
let thirdPersonEmail = "libero@convallis.edu";

//Lab 2 
// create an array of objects for the contact and add a new contact.
//The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.
//Display the first and last contact, again in the format: name / phone / email

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

contacts.push({name:"Maisie Haley", phone:"09135313030", email:"risus.Quisque@urna.ca"})

console.log(contacts.length)

console.log(`${contacts[3].name} / ${contacts[3].phone} / ${contacts[3].email}`)

