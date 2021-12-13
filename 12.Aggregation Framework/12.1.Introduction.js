//
db.persons.aggregate([{ $match: { gender: 'female' } }])

// group accumulates data
db.persons.aggregate([
  { $match: { gender: 'female' } },
  { $group: { _id: { city: '$location.city' }, totalPersons: { $sum: 1 } } },
  { $sort: { totalPersons: -1 } },
])

//!Assignment  1
//  a pipeline find only person older than 50,
//  group them by gender,
// what is average age then is calculated
db.persons.aggregate([
  { $match: { 'dob.age': { $gt: 50 } } },
  {
    $group: {
      _id: { gender: '$gender' },
      numOfPersons: { $sum: 1 },
      averageAge: { $avg: '$dob.age' },
    },
  },
  { $sort: { averageAge: -1 } },
])

db.persons.aggregate([
  {
    $match: { 'dob.age': { $gt: 30 } },
  },
  {
    $group: {
      _id: { gender: '$gender' },
      numOfPersons: { $sum: 1 },
    },
  },
  { $sort: { numOfPersons: 1 } },
])
