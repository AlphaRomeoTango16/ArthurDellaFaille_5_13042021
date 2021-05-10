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

function addContact(){
    let contact = getContact();
    let customer = new Customer(firstName, lastName, email, adress, city);
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let adress = document.getElementById("adress").value;
    let city = document.getElementById("city").value;
    saveContact(contact);
    }