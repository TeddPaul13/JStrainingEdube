//MODULE 4 LAB
//Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

//showing the first contact (first)
//showing the last contact (last)
//adding a new contact (new)
//When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, 
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    // write your code here
    let newContact = {};
    let addName = "Teddy" //window.prompt("Enter your name")
    newContact.name = addName ? addName : "Test";

    let addPhone = "0422 343 343" //window.prompt("Enter your phone number")
    newContact.phone = addPhone ? addPhone : 1111;

    let addEmail = "scot@email.com"; ////window.prompt("Enter your email")
    newContact.email = addEmail ? addEmail : "test@email.com"
   
    console.log (newContact);

    contacts.push(newContact)
    
    let last = contacts.length - 1;
    
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
    
    
    let checkFirstUser = contacts[0]

    if (!checkFirstUser){
        confirm("Check last user")
    }