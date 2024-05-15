import { Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { ENDPOINTS } from "src/endpoints";

@Entity({ name: ENDPOINTS.PRODUCTS })
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Products {
    @PrimaryGeneratedColumn()
    id: number;
}
