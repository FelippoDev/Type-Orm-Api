import { Video } from "../db/entities/Video";
import { AppDataSource } from "../db/data-source";


class GetAllVideosService {
    async execute(): Promise<Video>{
        const videoRepository = AppDataSource.getRepository(Video)
        
        const videoInstances = videoRepository.find({
            relations: ["category"],
        })
        
        return videoInstances
    }
}

export default GetAllVideosService