/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import InfoController from '#controllers/info_controller'
import AboutController from '#controllers/about_controller'
import GmController from '#controllers/gm_controller'
import CareController from '#controllers/care_controller'
import { middleware } from './kernel.js'


// router.on('/').render('auth/login')

const PagesController = () => import('#controllers/pages_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')

router.get('/', async (ctx) => {
    await ctx.auth.check()
    return ctx.view.render('pages/home')
})
router.get('/home', [PagesController, 'home'])

router.group(() => {
    router.get('/register', [RegisterController, 'show']).as('register.show').use(middleware.guest())
    router.post('/register', [RegisterController, 'store']).as('register.store').use(middleware.guest())
    router.get('/login', [LoginController, 'show']).as('login.show').use(middleware.guest())
    router.post('/login', [LoginController, 'store']).as('login.store').use(middleware.guest())
}).prefix('/auth').as('auth')

router.get('/plant_info', [InfoController, 'plant_info']).as('info.plant')
//.use(middleware.auth())
router.get('/about', [AboutController, 'about']).as('info.about')
//.use(middleware.auth())
router.get('/garden_manager', [GmController, 'garden_manager']).as('info.garden')
//.use(middleware.auth())
router.get('/plant_care', [CareController, 'plant_care']).as('info.care')
//.use(middleware.auth())