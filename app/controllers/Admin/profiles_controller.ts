import type { HttpContext } from '@adonisjs/core/http'
import Plant from '#models/plant'
import CommunityPost from '#models/community_post'

export default class ProfilesController {
  async index({ view, request }: HttpContext) {
    const userId = request['user']?.id
    if (!userId) {
        throw new Error('User ID not available')
    }
    const plants = await Plant.find({ 'user_id': userId })
    const posts = await CommunityPost.find({ 'user_id': userId })
      .sort({ createdAt: -1 })
      .populate('plant_id')
    return view.render('admin/profile', { posts, plants })
  }
}