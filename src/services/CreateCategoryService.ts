import { Category } from "../db/entities/Category"
import { AppDataSource } from "../db/data-source"

type CategoryRequest = {
    name: string,
    description: string
}

export class CreateCategoryService {
    async execute({name, description}: CategoryRequest) : Promise<Category|Error> {
        const categoryRepository = AppDataSource.getRepository(Category)

        if(!name || !description){
            return new Error("Category needed fields not sent.")
        }

        const existingCategory = await categoryRepository.findOneBy({name})
        if(existingCategory){
            return new Error("Category instance already exists.")
        }

        const categoryInstance = categoryRepository.create({name, description})
        await categoryRepository.save(categoryInstance)

        return categoryInstance
    }
}