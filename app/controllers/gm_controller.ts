// Garden Manager Controller
import type { HttpContext } from '@adonisjs/core/http'

export default class GmController {
  async garden_manager({ view }: HttpContext) {
    return view.render('pages/garden_manager')
  }
}