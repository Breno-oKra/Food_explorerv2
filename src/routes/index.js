const {Router} = require("express")
const userRoutes = require("./user.routes")
const foodsRoutes = require("./foods.routes")
const loginRouter = require("./login.routes")
const router = Router()

router.use("/user",userRoutes)
router.use("/foods",foodsRoutes)
router.use("/login",loginRouter)
router.get("/",(req,res) => {
    return res.json({})
})
module.exports = router