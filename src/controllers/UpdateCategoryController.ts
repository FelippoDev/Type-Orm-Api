import express from "express";
import UpdateCategoryService from "../services/UpdateCategoryService";

export class UpdateCategoryController {
    async handle(request: express.Request, response: express.Response) {
        const { name, description } = request.body
        const { id } = request.params
        const category = await new UpdateCategoryService().execute({
            id, name, description
        })

        if(category instanceof Error){
            return response.status(404).json({error:category.message})
        }
        
        return response.status(200).json(category)
    }
}