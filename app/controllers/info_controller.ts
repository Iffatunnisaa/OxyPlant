import type { HttpContext } from '@adonisjs/core/http'

export default class InfoController {
  async plant_info({ view }: HttpContext) {
    return view.render('pages/plant_info')
  }
}