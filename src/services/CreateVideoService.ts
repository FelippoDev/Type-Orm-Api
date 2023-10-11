import { Category } from "../db/entities/Category";
import { Video } from "../db/entities/Video";
import { AppDataSource } from "../db/data-source";

interface IVideo {
    name: string
    description: string
    duration: number
    category_id: string
}

class CreateVideoService {
    async execute({name, description, duration, category_id}: IVideo): Promise<Video|Error>{
        if(!name || !description || !duration || !category_id ){
            return new Error("Needed body was not given.")
        }

        const videoRepository = AppDataSource.getRepository(Video)
        const categoryRepository = AppDataSource.getRepository(Category)
        
        const categoryInstance = await categoryRepository.findOneBy(
            {id: category_id}
        )

        if(!categoryInstance){
            return new Error("Category does not exist.")
        }

        const videoInstance = videoRepository.create({name, description, duration, category_id})
        await videoRepository.save(videoInstance)
        return videoInstance
    }
}

export default CreateVideoService