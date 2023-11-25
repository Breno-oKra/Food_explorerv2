const knex = require("../database/knex")
class FoodsController{
    async create(request,response){
        const {name,description,value,user_id,category,ingredients} = request.body
        
        const UserFind = await knex("users").where({id:user_id})
        if (UserFind.length <= 0) {
           return response.status(404).json({})
        }

        const [foods_id] = await knex("foods").insert({
            name,description,value,user_id,category
        })
        const SelectIngredients = ingredients.map(i => {
            return{
                name:i,
                foods_id,
                user_id
            }
        })
        await knex("ingredients").insert(SelectIngredients)

        return response.status(201).json()
    }
    async show(request,response){
       const {id} = request.params
       const Food = await  knex("foods").where({ id }).first()
       const Ingredients = await knex("ingredients").where({foods_id:id}).orderBy("name")

       return response.json({
        ...Food,
        ingredients:[...Ingredients]
       })
    }
    async delete(request,response){
        const {id} = request.params
        await  knex("foods").where({ id }).delete()
        return response.status(200).json()
     }
}

module.exports = FoodsController