import type { HttpContext } from '@adonisjs/core/http'

export default class CreateController {
  async ManagerCreate({ view }: HttpContext) {
    return view.render('pages/tambah_kebun')
  }
}