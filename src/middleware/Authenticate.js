const {verify} = require("jsonwebtoken")

function Autheticate(request,response,next){
    const authHeader = request.headers.authorization

    if(!authHeader){
        return response.status(401).json()
    }
    const [,token] = authHeader.split(" ")
    try {
        const {sub:user_id} = verify(token,"default")
        request.user = {
            id:Number(user_id)
        }
        return next()
    } catch (error) {
        response.json({"error":error.message})
    }
}
module.exports = Autheticate