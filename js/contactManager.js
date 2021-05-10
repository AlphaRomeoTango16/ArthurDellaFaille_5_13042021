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
    let firstName = document.getElementById("first_name").value;
    contact.push(firstName);
    let lastName = document.getElementById("last_name").value;
    contact.push(lastName);
    let email = document.getElementById("email").value;
    contact.push(email);
    let adress = document.getElementById("adress").value;
    contact.push(adress);
    let city = document.getElementById("city").value;
    contact.push(city);
    saveContact(contact);
    }