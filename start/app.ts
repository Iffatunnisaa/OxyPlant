// start/app.ts
const providers = [
  '@adonisjs/core',
  // provider bawaan lainnya
  '../providers/MongooseProvider'  // <-- tambahkan ini
]

export { providers }