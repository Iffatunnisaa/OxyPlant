// app/Controllers/Http/GardenController.ts
import { HttpContext } from '@adonisjs/core/http'
import { schema, rules } from '@adonisjs/validator'
import app from '@adonisjs/core/services/app'
import Plant from '#models/plant'
import { DateTime } from 'luxon'

export default class GardenController {
  public async store({ request, response, auth }: HttpContext) {
    const plantSchema = schema.create({
      plant_name: schema.string([rules.minLength(3)]),
      plant_type: schema.enum(['sayuran', 'buah', 'herbal', 'hias', 'lainnya']),
      planting_date: schema.date(),
      watering_schedule: schema.number([rules.range(1, 30)]),
      plant_photo: schema.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg']
      })
    })

    try {
      const payload = await request.validate({ schema: plantSchema })
      
      const photo = request.file('plant_photo')!
      const fileName = `${DateTime.now().toUnixInteger()}-${photo.clientName}`
      
      // Gunakan app.publicPath() bukan Application.publicPath()
      await photo.move(app.publicPath('uploads'), {
        name: fileName,
        overwrite: true
      })

      await Plant.create({
        userId: auth.user!.id,
        ...payload,
        photoPath: fileName
      })

      return response.redirect().toRoute('garden.index')

    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: error.messages || error.message
      })
    }
  }
}