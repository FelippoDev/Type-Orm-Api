import { Category } from "../db/entities/Category"
import { AppDataSource } from "../db/data-source"

type CategoryUpdateRequest = {
    id: string,
    name?: string,
    description?: string
}

export class UpdateCategoryService {
    async execute({id, name, description}: CategoryUpdateRequest) : Promise<Category|Error> {
        const categoryRepository = AppDataSource.getRepository(Category)

        const category = await categoryRepository.findOneBy({id})
        if(!category){
            return new Error("Category not found.")
        }
        const newName = name ? name : category.name
        const newDescription = description ? description : category.description
        category.name = newName
        category.description = newDescription

        await categoryRepository.save(category)

        return category
    }
}

export default UpdateCategoryService