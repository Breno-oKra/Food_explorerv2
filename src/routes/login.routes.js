const {Router} = require("express")
const LoginController = require("../controllers/LoginController")

const loginController = new LoginController()
const loginRouter = Router()

loginRouter.post("/",loginController.create)

module.exports = loginRouter