import StorageService from './StorageService'

const user =
{
    "_id": "5a56640269f443a5d64b32xd",
    "email": "puki@renovize.com",
    "name": '',
    "phone": "+1 (968) 593-3859",
    "coinCount": "30",
    "moves": []
}

function getUser() {
    const user = StorageService.loadFromStorage('user')
    var userToReturn = user ? user : null;
    return userToReturn
}

function signup(name) {
    user.name = name
    StorageService.saveToStorage('user', user)
    console.log('user:', user);
}

function addMove(contact, amount) {
    if (!amount) return
    const user = StorageService.loadFromStorage('user')
    if (amount > user.coinCount) return alert('You have only ', user.coinCount, ' coins')
    user.coinCount -= amount
    user.moves.push({
        toId: contact._id,
        to: contact.name,
        amount,
        at: Date.now(),
    })
    StorageService.saveToStorage('user', user)
    console.log(amount + ' coins moved to ' + contact.name);
    console.log('Your current coins is ', user.coinCount);

}

export default {
    getUser,
    signup,
    addMove
}
