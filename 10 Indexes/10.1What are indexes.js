//explain can be used in read update and delete
// but not in insert
db.contacts.explain().find({ 'dob.age': { $gt: 60 } })
// gives proper explanation
db.contacts.explain('executionStats').find({ 'dob.age': { $gt: 60 } })

// *Creating index
// the argument 1 or -1 decides the order in which hashing index is created
db.contacts.createIndex({ 'dob.age': 1 })

// *Dropping index
db.contacts.dropIndex({ 'dob.age': 1 })

// !Indexes does have better performance if our query returns 10 or 20 % of data
// But when the query has to return large quantity of data, collscan is way faster than index
// its because the time to go through the index is saved in this case

// Creating indexes on Booleans wont do good as the value is true or false only

// Sorting
// MongoDB has threshold of 32MB on memory for sorting

// Index is required to sort also
// cause in memory sort has threshold of 32MB

// To see all indexes
db.contacts.getIndexes()

// Configuring indexes
db.contacts.createIndex({ email: 1 }, { unique: true })
// It throws error if email is not unique in the collection

//* Partial Filters
// Index size is smaller
// The following code generates a index on dob.age in ascending order for gender males only
// If we rarely search for female,it makes more sense
db.contacts.createIndex(
  { 'dob.age': 1 },
  { partialFilterExpression: { gender: 'male' } }
)

// It creates index of dob.age on age group greater than 60
db.contacts.createIndex(
  { 'dob.age': 1 },
  { partialFilterExpression: { 'dob.age': { $gt: 60 } } }
)

// !MongoDB users null value as a value

db.users.createIndex(
  { email: 1 },
  { unique: true, partialFilterExpression: { email: { $exists: true } } }
)

// *Time to live(TTL)
// Very useful to clean up data like sessions easily

db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 10 })

db.sessions.insertOne({
  data: 'Anubhav is not coming today',
  createdAt: new Date(),
})

// explain() has following options
// 1. QueryPlanner => shows summary for Executed Query+Winning Plan
// 2.executionStats => shows summary for Executed Query+Winning Plan+Possibly Rejected Plans
// 3.allPlansExecution =>shows summary for Executed Query+Winning Plan +Winning Plan Decision Process

// !Cleaning the Winning Plan from Cache
// 1.Write Threshold(currently 1000)
// 2.Index is Rebuilt
// 3.Other indexes are added or removed
// 4. MongoDB Server is restarted

// Multi Key Index

//* Text Index
// can have only one text index on a single collection
// text indexing is expensive

db.products.insertMany([
  {
    title: 'A Book',
    description: 'This is an awesome book about a young artist! ',
  },
  {
    title: 'Red T-Shirt',
    description: 'This tshirt is red and its pretty awesome!',
  },
])

// text index for above data
db.products.createIndex({ description: 'text' })

// Lets search for term 'young'
db.products.find({ $text: { $search: 'young' } })

// Scores
db.products
  .find(
    { $text: { $search: 'awesome t-shirt book' } },
    { score: { $meta: 'textScore' } }
  )
  .sort({ score: { $meta: 'textScore' } })

//   Creating combined text Indexes
db.products.createIndex({ title: 'text', description: 'text' })

// Excluding word during search
// '-' sign means the text after it is to be excluded during search
db.products.find({ $text: { $search: 'awesome -tshirt' } })

// Creating index on background
db.ratings.createIndex({ age: 1 }, { background: true })

// !Points to remember
// Indexes does not come for free
// *Indexes slows down our write
// We can use single-field,compound,multi-key(array) and text indexes
// can diagnose the queries with queryPlanner,executionStats...

// Index Options
// TTL,unique,background etc.
