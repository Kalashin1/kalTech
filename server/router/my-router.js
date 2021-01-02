const { Router } = require('express')
const signupController = require('../controllers/signup-controller.js')
const loginController = require('../controllers/login-controller.js')
const { logout } = require('../controllers/logout')
const router = Router()

router.post('/login', loginController.loginUser)
router.get('/logout', logout)
router.post('/signup', signupController.signUserUp)

module.exports = router
