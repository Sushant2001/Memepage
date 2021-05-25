//Update in db:-
show dbs
//for updating one:-
db.items.updateOne({name:"vivo v20"},{$set:{price:20000}})
//for many items:
db.items.updateMany({name:"vivo v20"},{$set:{price:26300,rating:5}})