import type { HttpContext } from '@adonisjs/core/http'

export default class AboutController {
  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }
}