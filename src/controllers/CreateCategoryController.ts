import express from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: express.Request, response: express.Response) {
        const { name, description } = request.body
        const service = new CreateCategoryService()
        const result = service.execute({name, description})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(201).json(result)
    }
}