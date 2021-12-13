// In cursor,the order of sort,limit or skip does not matter
db.shows.find().sort({ 'rating.average': 1, runtime: -1 }).skip(100).limit(10)

// Projection
db.shows.find(
  { genres: 'Drama' },
  { genres: { $elemMatch: { $eq: 'Horror' } } }
)

db.shows.find({}, { name: 1, genres: 1, _id: 0 })

// $slice
db.shows.find({}, { name: 1, genres: { $slice: 2 } })
db.shows.find({}, { name: 1, genres: { $slice: [1, 2] } })
