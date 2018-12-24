// const user =
// {
//     "_id": "5a56640269f443a5d64b32xd",
//     "name": "piki",
//     "email": "puki@renovize.com",
//     "phone": "+1 (968) 593-3859",
//     "coinCount": "30"
// }

function getUser() {
    const userName = localStorage.getItem('userName')
    var userToReturn = userName ? {
        "_id": "5a56640269f443a5d64b32xd",
        "name": userName,
        "email": "puki@renovize.com",
        "phone": "+1 (968) 593-3859",
        "coinCount": "30"
    }
        :
        null;
    return userToReturn
}

function signup(name) {
    localStorage.setItem('userName', name)
}



export default {
    getUser,
    signup
}
