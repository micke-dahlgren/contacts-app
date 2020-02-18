import phoneBookJSON from "../../data/PhoneBook.json";

export function generateId(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

export function fetchJSON(){
    return phoneBookJSON;
}

export function _addContact(phoneBookData, contactData){
    phoneBookData.unshift({
        _id:generateId(),
        name:contactData.name,
        company:contactData.company,
        phone:contactData.phone,
    })
    return phoneBookData;
}

export function _updateContact(phoneBookData, contactData, id){
    let index = phoneBookData.findIndex((item => item._id === id));

     //Update object's name property.
     phoneBookData[index].name = contactData.name;
     phoneBookData[index].company = contactData.company;
     phoneBookData[index].phone = contactData.phone;

    return phoneBookData;
}

export function _deleteContact  (phoneBookData, id) {
    phoneBookData.forEach(item =>{
      if(item._id === id){
        phoneBookData.splice(phoneBookData.indexOf(item),1);
      }
    })
    
    return phoneBookData;
}
