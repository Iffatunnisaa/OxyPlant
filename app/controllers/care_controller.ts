import type { HttpContext } from '@adonisjs/core/http'

export default class CareController {
  async plant_care({ view }: HttpContext) {
    return view.render('pages/plant_care')
  }
}