// app/Schemas/PlantSchema.ts
import mongoose, { Document, Schema } from 'mongoose'

export interface IPlant extends Document {
  userId: string
  name: string
  type: 'sayuran' | 'buah' | 'herbal' | 'hias' | 'lainnya'
  plantingDate: Date
  wateringSchedule: number
  photoPath: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const PlantSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    type: { 
      type: String, 
      enum: ['sayuran', 'buah', 'herbal', 'hias', 'lainnya'], 
      required: true 
    },
    plantingDate: { type: Date, required: true },
    wateringSchedule: { type: Number, required: true },
    photoPath: { type: String, required: true },
    notes: { type: String, default: null },
  },
  {
    timestamps: true, // otomatis buat createdAt dan updatedAt
  }
)

export default mongoose.model<IPlant>('Plant', PlantSchema)
