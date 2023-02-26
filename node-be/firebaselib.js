//Wrapper for the  firebase client
const fb = require('firebase/app')
const fbDB = require('firebase/database')

const firebaseConfig = {
    apiKey: "AIzaSyCKlOxMH55-FdQ1dRJfr856EtEreq9DD1k",
    authDomain: "snapstock-51d42.firebaseapp.com",
    projectId: "snapstock-51d42",
    storageBucket: "snapstock-51d42.appspot.com",
    messagingSenderId: "233763766149",
    appId: "1:233763766149:web:58b912317dc08268170eec",
    measurementId: "G-2155380X11",
    databaseURL: "https://snapstock-51d42-default-rtdb.firebaseio.com"
};

function TestFirebase() {
    const firebase = fb.initializeApp(firebaseConfig);

    //db instance
    const database = fbDB.getDatabase(firebase);

    writeUserData(database, "greg", "apple", 90)

}

function writeUserData(db, userId, food, quantity) {
    fbDB.set(fbDB.ref(db, 'users/' + userId), {
        username: userId,
        food: food,
        quantity: quantity
    });
}

module.exports = {TestFirebase}
