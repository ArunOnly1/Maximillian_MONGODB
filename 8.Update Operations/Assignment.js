// 1. Create a new collection('sports') and upsert two new documents into it
// (within these fields:"title","requiresTeam")

db.sports.updateOne(
  {},
  { $set: { title: 'Cricket', requiresTeam: true } },
  { upsert: true }
)
db.sports.updateOne(
  { title: 'Random Game' },
  { $set: { title: 'Football', requiresTeam: true } },
  { upsert: true }
)

db.sports.updateOne(
  { title: 'Some game' },
  { $set: { title: 'table tennis', requiresTeam: false } },
  { upsert: true }
)

// 2
db.sports.updateMany({ requiresTeam: true }, { $min: { numOfPlayers: 11 } })

// 3
db.sports.updateMany({ requiresTeam: true }, { $inc: { numOfPlayers: 10 } })
