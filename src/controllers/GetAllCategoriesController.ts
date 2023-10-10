import express from 'express'
import GetAllCategoriesService from '../services/GetAllCategoriesService'

export class GetAllCategoriesController {
    async handle(request: express.Request, response: express.Response) {
        const categories = await new GetAllCategoriesService().execute()
        return response.status(200).json(categories)
    }
}