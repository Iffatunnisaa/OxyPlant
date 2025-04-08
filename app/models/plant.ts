// app/Models/Plant.ts
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Plant extends BaseModel {
    @column({ isPrimary: true })
    public id!: number  // Definite assignment assertion
  
    @column()
    public userId!: number
  
    @column()
    public name!: string
  
    @column()
    public type!: 'sayuran' | 'buah' | 'herbal' | 'hias' | 'lainnya'
  
    @column.date()
    public plantingDate!: DateTime
  
    @column()
    public wateringSchedule!: number
  
    @column()
    public photoPath!: string
  
    @column()
    public notes?: string  // Optional field
  
    @column.dateTime({ autoCreate: true })
    public createdAt!: DateTime
  
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt!: DateTime
  
    @belongsTo(() => User)
    public user!: BelongsTo<typeof User>
  }