db.users.insertMany([
  {
    name: 'Max',
    hobbies: [
      { title: 'Sports', frequency: 3 },
      { title: 'Swimming', frequency: 2 },
    ],
    phone: 9849985167,
  },
  {
    name: 'Amit',
    hobbies: [
      { title: 'Smoking', frequency: 15 },
      { title: 'Eating', frequency: 25 },
    ],
    phone: '9849632145',
    age: 26,
  },
])

db.users.insertOne({
  name: 'Anna',
  hobbies: [
    { title: 'Yoga', frequency: 3 },
    { title: 'Sports', frequency: 2 },
  ],
  phone: '036452',
  age: null,
})

//Exists Operator
db.users.find({ age: { $exists: true } })
db.users.find({ age: { $exists: true, $ne: null } })

//type operator
db.users.find({ phone: { $type: 'string' } })
db.users.find({ age: { $type: 'null' } })
// Docs:https://docs.mongodb.com/manual/reference/operator/query/type/#mongodb-query-op.-type

//regex
// It is nice for searching text
//But not the efficient way of doing that
db.shows.find({ summary: { $regex: /post-apocalyptic/ } })

// expr
db.sales.insertMany([
  {
    volume: 100,
    target: 120,
  },
  {
    volume: 89,
    target: 80,
  },
  {
    volume: 200,
    target: 177,
  },
])

db.sales.find({
  $expr: {
    $gt: [
      {
        $cond: {
          if: { $gte: ['$volume', 190] },
          then: { $subtract: ['$volume', 10] },
          else: '$volume',
        },
      },
      '$target',
    ],
  },
})
