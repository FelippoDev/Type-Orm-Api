import { Category } from "../db/entities/Category";
import { AppDataSource } from "../db/data-source";


class GetAllCategoriesService {
    async execute(): Promise<Category>{
        const categoryRepository = AppDataSource.getRepository(Category)
        
        const categoryInstances = await categoryRepository.find()

        return categoryInstances
    }
}

export default GetAllCategoriesService