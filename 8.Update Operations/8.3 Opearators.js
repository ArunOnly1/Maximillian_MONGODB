// inc operator
db.users.updateOne(
  { _id: ObjectId('61aef825d9dc7cf9d733f2fe') },
  { $inc: { age: 2 } }
)

// min/max and mul
db.users.updateOne({ name: 'Anna' })

db.users.updateOne(
  { _id: ObjectId('61aef825d9dc7cf9d733f2fe') },
  { $min: { age: 2 } }
)

db.users.updateOne(
  { _id: ObjectId('61aef825d9dc7cf9d733f2fe') },
  { $mul: { age: 10 } }
)

db.users.updateOne(
  { _id: ObjectId('61aef825d9dc7cf9d733f2fe') },
  { $max: { age: 45 } }
)

// unset operator
// It is used to get rid of a field
// i.e. to drop a field
db.users.updateMany({ isSporty: true }, { $unset: { phone: '' } })

// rename operator
// Renaming the fields
db.users.updateMany({}, { $rename: { age: 'totalAge' } })

// upsert operator
// upsert=>update and insert
// If there is no document as per filter, it will be inserted
db.users.updateOne(
  { name: 'Maria' },
  {
    $set: {
      age: 24,
      hobbies: [{ title: 'Good food', frequency: 3 }],
      isSporty: true,
    },
  },
  { upsert: true }
)

// Updating alll array elements
db.users.updateMany(
  { totalAge: { $gt: 5 } },
  { $inc: { 'hobbies.$[].frequency': 1 } }
)
