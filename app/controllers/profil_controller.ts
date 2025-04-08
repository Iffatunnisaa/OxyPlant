import type { HttpContext } from '@adonisjs/core/http'

export default class ProfilController {
  async profil({ view }: HttpContext) {
    return view.render('pages/profil')
  }
}