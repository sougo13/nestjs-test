import { IsDefined, IsString, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  productId: number;

  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  @Column()
  name: string;
}
