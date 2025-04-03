/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

// router.on('/').render('auth/login')

const PagesController = () => import('#controllers/pages_controller')
const RegisterController = () => import('#controllers/auth/register_controller')

router.get('/', async (ctx) => {
    await ctx.auth.check()
    return ctx.view.render('pages/home')
})
router.get('/home', [PagesController, 'home'])

router.group(() => {
    router.get('/register', [RegisterController, 'show']).as('register.show').use(middleware.guest())
    router.post('/register', [RegisterController, 'store']).as('register.store').use(middleware.guest())
}).prefix('/auth').as('auth')