import mongoose from 'mongoose'

const mongoUri = process.env.MONGODB_URI

if (!mongoUri) {
  throw new Error('❌ MONGODB_URI is not defined in environment variables')
}

mongoose
  .connect(mongoUri, {
    dbName: 'adonis_mongo_auth',
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err))
