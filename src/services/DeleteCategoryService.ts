import { Category } from "../db/entities/Category"
import { AppDataSource } from "../db/data-source"

class DeleteCategoryService {
    async execute(id: string): Promise<void|Error>{
        const categoryRepository = AppDataSource.getRepository(Category)
        const category = await categoryRepository.findOneBy({id})
        if(!category){
            return new Error("Category not found.")
        }
        await categoryRepository.delete(id)
    }
}

export default DeleteCategoryService