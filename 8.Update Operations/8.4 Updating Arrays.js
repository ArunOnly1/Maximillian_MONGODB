// Updating array elements which first met the condition
db.users.updateMany(
  { hobbies: { $elemMatch: { title: 'Yoga', frequency: 3 } } },
  { $unset: { 'hobbies.$.title': '' } }
)

// Updating all array elements
db.users.updateMany(
  { 'hobbies.frequency': { $gt: 5 } },
  { $set: { 'hobbies.$[].goodFrequency': true } }
)

// Updating those who meets the arrayFilter conditions
db.users.updateMany(
  { 'hobbies.frequency': { $gt: 5 } },
  { $set: { 'hobbies.$[el].goodFrequency': true } },
  { arrayFilters: [{ 'el.frequency': { $gt: 5 } }] }
)

// Adding elements to array
db.users.updateMany(
  { name: 'maria' },
  { $push: { hobbies: { title: 'Coding', frequency: 5 } } }
)

// pushing multiple elements
db.users.updateOne(
  { name: 'maria' },
  {
    $push: {
      hobbies: {
        $each: [
          { title: 'Racing', frequency: 55 },
          { title: 'Texting', frequency: 2 },
        ],
        $sort: { frequency: -1 },
        $position: 0,
      },
    },
  }
)

db.users.updateOne(
  { name: 'Anna' },
  {
    $push: {
      hobbies: {
        $each: [
          { title: 'Racing', frequency: 55 },
          { title: 'Texting', frequency: 2 },
        ],
        $position: 0,
      },
    },
  }
)

db.users.updateOne(
  { name: 'maria' },
  { $push: { hobbies: { title: 'hiking', frequency: 1 } } }
)

// Removing elements from array
db.users.updateOne(
  { name: 'Anna' },
  { $pop: { hobbies: { title: 'Texting' } } }
)

// addToSet
db.users.updateOne(
  {
    name: 'maria',
  },
  {
    $addToSet: { hobbies: { title: 'Playing carrom', frequency: 22 } },
  }
)
