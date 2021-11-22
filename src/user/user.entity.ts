import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @ApiProperty({ example: "1", description: "Unique identifier" })
  @PrimaryGeneratedColumn()
  userId: number;

  @ApiProperty({ example: "example@gmail.com", description: "User email" })
  @IsDefined({ always: true })
  @IsString({ always: true })
  @Column()
  email: string;

  @ApiProperty({ example: "password123", description: "User password" })
  @IsDefined({ always: true })
  @IsString({ always: true })
  @Column()
  password: string;
}
