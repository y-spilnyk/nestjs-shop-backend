import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsRepository } from "./products.repository"
import { Products } from "./products.entity"
import { ProductsFilterDto } from "./dto/get-products-filter.dto"

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository
    ) {}

    async getAllProducts(filterDto: ProductsFilterDto): Promise<Products[]> {
        return this.productsRepository.getAllProducts(filterDto);
    }

    // async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    //     return await this.tasksRepository.createTask(createTaskDto, user);
    // }

    // async getTaskById(id: string, user: User): Promise<Task> {
    //     const getTaskByID = await this.tasksRepository.getTaskById(id, user);
    //     return getTaskByID;
    // }

    // async updateTaskStatus(
    //     id: string,
    //     updateTaskStatusDto: UpdateTaskStatusDto,
    //     user: User
    // ): Promise<Task> {
    //     const userTask = await this.getTaskById(id, user);
    //     return await this.tasksRepository.updateTaskStatus(userTask.id, updateTaskStatusDto, user);
    // }

    // async deleteTaskById(id: string, user: User): Promise<void> {
    //     await this.tasksRepository.deleteTask(id, user);
    // }
}
