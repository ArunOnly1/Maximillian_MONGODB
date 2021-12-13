const data = [
  {
    _id: 'arun',
    gender: 'male',
    name: {
      title: 'mr',
      first: 'cecil',
      last: 'mcdonalid',
    },
    location: {
      street: '4839 paddock way',
      city: 'townsville',
      state: 'tasmania',
      postcode: 9736,
      coordinates: {
        latitude: '31.5356',
        longitude: '-1.6516',
      },
      timezone: {
        offset: '+7:00',
        description: 'Bangkok, Hanoi, Jakarta',
      },
    },
    email: 'cecil.mcdonalid@example.com',
    login: {
      uuid: 'bb51b726-b75c-4eef-9d00-07395dbf5e66',
      username: 'silverlion987',
      password: 'randy',
      salt: 'BWqKtfSv',
      md5: '916fa502f33887a7fdd5fbd101a466b0',
      sha1: '377ea7043677a2b803f92c304c8633b96315ec7b',
      sha256:
        '42456d47faeeda9fd1f26267346e55c72f5ff7f47706862889b2f5db0998899b',
    },
    dob: {
      date: '1970-05-21T01:19:29Z',
      age: 48,
    },
    registered: {
      date: '2012-02-14T08:04:39Z',
      age: 6,
    },
    phone: '06-5880-8579',
    cell: '0412-084-209',
    id: {
      name: 'TFN',
      value: '761952177',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/18.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/18.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/18.jpg',
    },
    nat: 'AU',
  },
  {
    _id: 'amit',
    gender: 'male',
    name: { title: 'mr', first: 'torben', last: 'tolksdorf' },
    location: {
      street: 'kastanienweg 120',
      city: 'alsfeld',
      state: 'saarland',
      postcode: 67022,
      coordinates: { latitude: '-38.9869', longitude: '-148.0070' },
      timezone: {
        offset: '-5:00',
        description: 'Eastern Time (US & Canada), Bogota, Lima',
      },
    },
    email: 'torben.tolksdorf@example.com',
    login: {
      uuid: '436a3437-fa82-45d0-9abe-34e39a4a3c32',
      username: 'silverduck704',
      password: 'woodstoc',
      salt: '1DRshFwv',
      md5: '8bfba88edf7321a333e784d8bacdc8ff',
      sha1: 'b01ac1d6cc632c1e1eda020179090a5789563735',
      sha256:
        '849418b349f07407e40ec3056aaadd2a29ced6fd7dab3b06f2cc2998e8d87892',
    },
    dob: { date: '1950-08-10T03:45:14Z', age: 68 },
    registered: { date: '2004-12-08T22:11:13Z', age: 13 },
    phone: '0286-9981260',
    cell: '0178-5768974',
    id: { name: '', value: null },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/32.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/32.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/32.jpg',
    },
    nat: 'DE',
  },
]

let sum = 0
let avg = 0
data.forEach((doc) => {
  sum = sum + doc.dob.age
})

console.log(sum / 2)
