function getContact(){
    let contact = localStorage.getItem("contact");
    if(contact == null){
        return [];
    }else{
        return JSON.parse(contact);
    }
}

function getContactId(){
    return getContact().map(contact => contact.id)
}

function saveContact(contact){
    localStorage.setItem("contact", JSON.stringify(contact));
}

class Customer {
    constructor(firstName, lastName, email, adress, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.adress = adress;
        this.city = city;
    }
}

function addContact(){
    let contact = getContact();
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let adress = document.getElementById("adress").value;
    let city = document.getElementById("city").value;
    const customer = new Customer(firstName, lastName, email, adress, city);
    contact.push(customer);
    saveContact(contact);
    }