const knex = require("../database/knex")
const { compare } = require("bcryptjs");
const {sign} = require("jsonwebtoken");
const ErrorMessage = require("../utils/Errors");
class LoginController{
    async create(request,response){
        const {email,password} = request.body
       
        const user = await knex("users").where({email}).first()
        if(!user){
            throw new ErrorMessage("Usuario não encontrado",404)
        }
        const passwordCorrect = await compare(password.toString(),user.password)
        if(!passwordCorrect){
            throw new ErrorMessage("Email/Password Incorreta")
        }
        const token = sign({},"default",{
            subject:Number(user.id),
            expiresIn:'1d'
        })
        
        return response.status(200).json({user,token})
    }
}

module.exports = LoginController