// Storing Geospatial Data in GeoJSON Format
// Inseting co-ordinates data
db.places.insertOne({
  name: 'Swoyambhu Stupa',
  location: {
    type: 'Point',
    coordinates: [85.29024578283381, 27.716165613468903],
  },
})

// Creating index
db.places.createIndex({ location: '2dsphere' })

// Querying location based on cordinates,max and min distance
db.places.find({
  location: {
    $near: {
      $geometry: { type: 'Point', coordinates: [85.314991, 27.6868552] },
      $maxDistance: 500,
      $minDistance: 5,
    },
  },
})

// To find places within a polygon

// The polygon coordinates are as follows
// This is pharping area
const p1 = [85.26396974579835, 27.61747608328619]
const p2 = [85.26881809276313, 27.617114319560635]
const p3 = [85.27022242785233, 27.605499135814878]
const p4 = [85.26354636724477, 27.60544535351096]
const p5 = [85.25608131765634, 27.611415028073317]

// given polygon ma parne location haru return garxa
db.places.find({
  location: {
    $geoWithin: {
      $geometry: { type: 'Polygon', coordinates: [[p1, p2, p3, p4, p5, p1]] },
    },
  },
})

// Creating an area using polygon
db.areas.insertOne({
  name: 'Pharping',
  area: {
    type: 'Polygon',
    coordinates: [[p1, p2, p3, p4, p5, p1]],
  },
})

// Whether the user is inside a particular area
// Let the user location is : [ 85.26448542435271,27.61035144619971]
// Lets create an index again
db.areas.createIndex({ area: '2dsphere' })

// Now it gives the area in which the specified location lies
// given location ma parne area haru return garxa
db.areas.find({
  area: {
    $geoIntersects: {
      $geometry: {
        type: 'Point',
        coordinates: [85.26448542435271, 27.61035144619971],
      },
    },
  },
})

// finding places within a certain radius
db.places.find({
  location: {
    $geoWithin: {
      $centerSphere: [[85.2634082252073, 27.611042653637405], 10 / 3963.2],
    },
  },
})
