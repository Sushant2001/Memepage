//Inserting data in MongoDb:-
use sushantkart //powershell me as db khola h
db.items.insertOne({ name: "vivo v20", price: 25000, rating: 5, qty: 12, sold: 11 })
//copy and paste this into powershell trminal then press enter to enter this data inside our
// database.
db.items.insertMany([{ name: "vivo v20", price: 25000, rating: 5, qty: 12, sold: 11 }, db.items.insertOne({ name: "vivo s1", price: 17000, rating: 4.5, qty: 22, sold: 15 })])
//continuing with tutorial 82:-
//searching /querying in mongodb:-
use sushantkart
//Below listed line or query will provide us all the listings in our database containing price as 17000:
db.items.find({price:17000})
//Text written inside parameter is called filter.
// for filtering values below or above a certain value
db.items.find({rating: {$gte: 4.5}})
//gte means greater than or equal to
db.items.find({rating: {$gte: 4.5},price:{$gt:18000}})//and operation
//we can use multiple filters at a time as well as stated above.
//or operation bw two or 3 conditions withn find parameter:-
db.items.find({$or:[{rating: {$lt: 3.5}},{price:{$gt:10000}}]})//where lt stands for less than and gt stands for greater than.
//for using or between the 2 conditions we just have to keep them inside an array of or :-
//for getting any particular detail about the listed item,we can use:-
db.items.find({rating: {$gt: 3.5}},{rating:1},{qty:1})
//For deleting the items from the database,:-
show dbs
use sushantkart
db.items.find({price:25000})
//syntax of deletion:-
db.items.deleteOne({price:25000})
//output:-{ "acknowledged" : true, "deletedCount" : 1 }
// deletes first entry matching with the filter






