import express from 'express'
import CreateVideoService from '../services/CreateVideoService'

export class CreateVideoController {
    async handle(request: express.Request, response: express.Response) : Promise<express.Response> {
        const { name, description, duration, category_id } = request.body
        const videoService = new CreateVideoService()
        const video = await videoService.execute({ name, description, duration, category_id })

        if(video instanceof Error){
            return response.status(400).json({"error": video.message})
        }

        return response.status(201).json(video)
    }
}