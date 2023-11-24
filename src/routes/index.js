const {Router} = require("express")
const userRoutes = require("./user.routes")
const router = Router()

router.use("/user",userRoutes)
router.get("/",(req,res) => {
    return res.json({})
})
module.exports = router