import express from 'express'
import DeleteCategoryService from '../services/DeleteCategoryService'

export class DeleteCategoryController {
    async handle(request: express.Request, response: express.Response) {
        const { id } = request.params
        const category = await new DeleteCategoryService().execute(id)
        
        if(category instanceof Error){
            return response.status(404).json({message: category.message})
        }

        return response.sendStatus(204)
    }
}