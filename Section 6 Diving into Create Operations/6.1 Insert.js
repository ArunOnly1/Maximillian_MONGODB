// Ordered insert,by default ordered is true
// serially insert garxa
// error aauna sath break hunxa..paxadi ko correct bhayeni insert hudaina
//! yo insertMany ma matra ho
db.hobbies.insertMany(
  [
    { _id: 'yoga', name: 'yoga' },
    { _id: 'cooking', name: 'Cooking' },
    { _id: 'hiking', name: 'hiking' },
  ],
  { ordered: true }
)

// Unordered insert
// error aako bahek aru insert hunxa
db.hobbies.insertMany(
  [
    { _id: 'yoga', name: 'yoga' },
    { _id: 'cooking', name: 'Cooking' },
    { _id: 'hiking', name: 'hiking' },
  ],
  { ordered: false }
)
