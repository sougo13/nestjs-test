import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProductDto {

  @ApiProperty({ example: 'Dress', description: 'Сlothing name' })
  @IsString({ message: 'Must be a string' })
  readonly name: string;

}
