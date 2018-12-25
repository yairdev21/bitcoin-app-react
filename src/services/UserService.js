const user =
{
    "_id": "5a56640269f443a5d64b32xd",
    "email": "puki@renovize.com",
    "name": null,
    "phone": "+1 (968) 593-3859",
    "coinCount": "30"
}

function getUser() {
    const userName = localStorage.getItem('userName')
    user.name = userName
    var userToReturn = userName ? user : null;
    return userToReturn
}

function signup(name) {
    localStorage.setItem('userName', name)
}

function addMove(contact, amount) {
    user.coinCount -= amount
    console.log(amount +' coins moved to '+ contact.name);
    console.log('Your current coins is ',  user.coinCount);
    
}

export default {
    getUser,
    signup,
    addMove
}
