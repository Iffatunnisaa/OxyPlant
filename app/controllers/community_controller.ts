import type { HttpContext } from '@adonisjs/core/http'
import plant, { IPlant } from '#models/plant'

interface IUser {
  fullName: string | null
  email: string
}

interface IPlantPopulated extends Omit<IPlant, 'userId'> {
  userId?: IUser | string
}

const allPlants = await plant.find().populate<{ userId: IUser }>('userId')

const plants = allPlants.map((p: IPlantPopulated) => ({
  name: p.name,
  owner: typeof p.userId === 'object' ? (p.userId.fullName || p.userId.email) : 'Unknown',
  imageUrl: p.photoPath || '/images/default_plant.jpg',
}))

export default class CommunityController {
  async community({ view }: HttpContext) {
    return view.render('pages/community')
  }
}