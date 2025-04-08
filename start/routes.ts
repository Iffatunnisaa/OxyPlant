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
import ProfilController from '#controllers/profil_controller'
import CreateController from '#controllers/managerCreate_controller'
import LogoutController from '#controllers/auth/logout_controller'


// router.on('/').render('auth/login')

const PagesController = () => import('#controllers/pages_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')

router.get('/', async (ctx) => {
    await ctx.auth.check()
    return ctx.view.render('pages/home')
})
router.get('/home', [PagesController, 'home']).as('info.home')

router.group(() => {
    router.get('/register', [RegisterController, 'show']).as('register.show').use(middleware.guest())
    router.post('/register', [RegisterController, 'store']).as('register.store').use(middleware.guest())
    router.get('/login', [LoginController, 'show']).as('login.show').use(middleware.guest())
    router.post('/login', [LoginController, 'store']).as('login.store').use(middleware.guest())

    router.get('/logout', [LogoutController, 'handle']).as('logout').use(middleware.auth())
}).prefix('/auth').as('auth')

router.get('/plant_info', [InfoController, 'plant_info']).as('info.plant')
//.use(middleware.auth())
router.get('/about', [AboutController, 'about']).as('info.about')
//.use(middleware.auth())
router.get('/garden_manager', [GmController, 'garden_manager']).as('info.garden')
//.use(middleware.auth())
router.get('/plant_care', [CareController, 'plant_care']).as('info.care')
//.use(middleware.auth())
router.get('/profil', [ProfilController, 'profil']).as('info.profil')
//.use(middleware.auth())
router.get('/tambah_kebun', [CreateController, 'ManagerCreate']).as('info.kebun')
//.use(middleware.auth())

router.group(() => {
    // Display create plant form (GET)
    router.get('garden/create', 'garden_controller.create')
      .as('info.garden.create')
      .use(middleware.auth())
  
    // Handle plant creation (POST)
    router.post('garden/store', 'garden_controller.store')
      .as('info.garden.store')
      .use(middleware.auth())
  
    // Other garden routes
    router.get('garden', 'garden_controller.index').as('info.tambah')
    router.get('garden/:id', 'garden_controller.show').as('info.garden.detail')
  }).prefix('api/v1')
