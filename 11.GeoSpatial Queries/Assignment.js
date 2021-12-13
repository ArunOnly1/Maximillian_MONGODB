// 1. Insert three new locations
db.places.insertOne({
  name: 'Tribhuvan Aadarsha School',
  location: {
    type: 'Point',
    coordinates: [85.26471317475094, 27.613546144397855],
  },
})

db.places.insertOne({
  name: 'KamalPokhari',
  location: {
    type: 'Point',
    coordinates: [85.2634385610373, 27.608615068192726],
  },
})

db.places.insertOne({
  name: 'Hotel Green Tara and Resort',
  location: {
    type: 'Point',
    coordinates: [85.26223578562433, 27.613525586045142],
  },
})

// 2.Pick a point and find the nearest points with max and min distance
db.places.createIndex({ location: '2dsphere' })

db.places.find({
  location: {
    $near: {
      $geometry: {
        type: 'Point',
        coordinates: [85.28043331444661, 27.6171998967005],
      },
      $maxDistance: 500,
      $minDistance: 5,
    },
  },
})

// 3.Pick an area and see which points belongs to that area

const p1 = [85.26452363087827, 27.614594740677433]
const p2 = [85.26719409537522, 27.61432294020609]
const p3 = [85.26665278500421, 27.612244443713998]
const p4 = [85.26381992739597, 27.612660146167677]

db.places.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: 'Polygon',
        coordinates: [[p1, p2, p3, p4, p1]],
      },
    },
  },
})

// With radius

db.places.find({
  location: {
    $geoWithin: {
      $centerSphere: [[85.2638206312568, 27.613659920028265], 5 / 3963.2],
    },
  },
})

// 4.Store at least one area in a different collection

const p1 = [85.26452363087827, 27.614594740677433]
const p2 = [85.26719409537522, 27.61432294020609]
const p3 = [85.26665278500421, 27.612244443713998]
const p4 = [85.26381992739597, 27.612660146167677]

db.areas.insertOne({
  name: 'Tribhuvan School Area',
  location: { type: 'Polygon', coordinates: [[p1, p2, p3, p4, p1]] },
})

// 5.Pick a point  and find out which areas in your collection contain that point
db.areas.find({
  location: {
    $geoIntersects: {
      $geometry: {
        type: 'Point',
        coordinates: [85.26522289946841, 27.61312600809887],
      },
    },
  },
})
