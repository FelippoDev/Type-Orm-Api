import express from 'express'
import GetAllVideosService from '../services/GetAllVideosService'

export class GetAllVideosController {
    async handle(request: express.Request, response: express.Response) {
        const categories = await new GetAllVideosService().execute()
        return response.status(200).json(categories)
    }
}