const mongoose = require("mongoose");
/*
//Get Food
const getFood = new mongoose.Schema({
    name: { type: String, required: true},
    foodInventory: {type: Array, required: true}
})

//Get Receipts
const getReceipts = mongoose.Schema({
    name: { type: String, required: true},
    receipts: {type: Array, required: true}
})



const gFood  = mongoose.model('GetFood', getFood);
const gReceipts = mongoose.model('GetReceipts', getReceipts);
*/

const User = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    foodInventory: {type: Array, required: true}
})

const mUser = mongoose.model('User', User);


/*
Firebase Storage
keyID(represent people)
List of food inventory
List of receipts
Name


Information Requests
Food Inventory
Receipts


 */