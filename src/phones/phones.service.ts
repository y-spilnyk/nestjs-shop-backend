import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { PhonesRepository } from "./phones.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../auth/user.entity";
import { Phones } from "./phones.entity"
import { PhonesFilterDto } from "./dto/get-Phones-filter.dto"

@Injectable()
export class PhonesService {
    constructor(
        @InjectRepository(PhonesRepository)
        private tasksRepository: PhonesRepository
    ) {}

    async getPhones(filterDto: PhonesFilterDto): Promise<Phones[]> {
        return this.tasksRepository.getPhones(filterDto);
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
