//1 Import

// 2 Find all movies with exactly two genres
db.exmoviestarts.find({ genre: { $size: 2 } })

// 3. Find all movies which aired in 2018
db.exmoviestarts.find({ 'meta.aired': 2018 })

//Find all movies which has ratings greater than 8 but lower than 10
db.exmoviestarts.find({ ratings: { $elemMatch: { $gt: 8, $lt: 10 } } })
db.exmoviestarts.find({ ratings: { $lt: 10, $gt: 8 } })
