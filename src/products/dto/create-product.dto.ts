import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNumber({ maxDecimalPlaces: 4 })
  @IsPositive()
  @Min(0)
  @IsNotEmpty()
  @Type(() => Number)
  public price: number;
}
