const knex = require("../database/knex")
const { hash } = require("bcryptjs");
const ErrorMessage = require("../utils/Errors");
class UserController{
    async create(request,response){
        const {name,email,password,phone} = request.body
        const user = await knex("users").where({email}).first()
        if(user){   
            throw new ErrorMessage("Email já está em uso")
        }
        const passwordHash = await hash(password,9)
        
        await knex("users").insert({name,email,password:passwordHash,phone})
        return response.status(201).json()
    }
}

module.exports = UserController