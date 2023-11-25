const {Router} = require("express")
const FoodsController = require("../controllers/FoodsController")
const Autheticate = require("../middleware/Authenticate")

const foodsController = new FoodsController()
const foodsRoutes = Router()

foodsRoutes.use(Autheticate)
foodsRoutes.post("/",foodsController.create)
foodsRoutes.get("/:id",foodsController.show)

module.exports = foodsRoutes