db.users.updateOne(
  { _id: ObjectId('61af245785415b9a88384afd') },
  {
    $set: {
      hobbies: [
        { title: 'Sports', frequency: 5 },
        { title: 'Cooking', frequency: 15 },
        { title: 'Drinking coffee', frequency: 25 },
      ],
    },
  }
)

db.users.find({ hobbies: { $elemMatch: { title: 'Sports', frequency: 15 } } })
