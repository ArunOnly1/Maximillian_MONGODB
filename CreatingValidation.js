// Creating collection actively
db.createCollection('posts', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title', 'text', 'creator', 'comments'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        text: {
          bsonType: 'string',
          description: 'must be an objecid and is required',
        },
        creator: {
          bsonType: 'objectId',
          description: 'must be and objectid and is required',
        },
        comments: {
          bsonType: 'array',
          description: 'must be an array and is required',
          items: {
            bsonType: 'object',
            required: ['text', 'author'],
            properties: {
              text: {
                bsonType: 'string',
                description: 'must be a string and required',
              },
              author: {
                bsonType: 'objectId',
                description: 'must be an objectId and required',
              },
            },
          },
        },
      },
    },
  },
})
