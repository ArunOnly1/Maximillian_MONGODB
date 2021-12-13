// Importing attached data into new database and collection

//Search all movies that have a rating higher than 9.2 and a runtime lower than 100 minutes
db.movieStarts.find({
  'meta.rating': { $gt: 9.2 },
  'meta.runtime': { $lt: 100 },
})

db.movieStarts.find({
  $and: [{ 'meta.rating': { $gt: 9.2 } }, { 'meta.runtime': { $lt: 100 } }],
})

//Search all movies that have a genre of "drama" or "action"
db.movieStarts.find({
  $or: [{ genre: 'drama' }, { genre: 'action' }],
})

db.movieStarts.find({ genre: { $in: ['drama', 'action'] } })

// Search all the movies where visitors exceeded expectedVisitors
db.movieStarts.find({ $expr: { $gt: ['$visitors', '$expectedVisitors'] } })

db.users.insertOne({
  name: 'Chris',
  hobbies: ['Sports', 'Cooking', 'Drinking coffee'],
})
