import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsString, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @ApiProperty({ example: "1", description: "Unique identifier" })
  @PrimaryGeneratedColumn()
  productId: number;

  @ApiProperty({ example: "Shirt dress", description: "Product name" })
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  @Column()
  name: string;
}
