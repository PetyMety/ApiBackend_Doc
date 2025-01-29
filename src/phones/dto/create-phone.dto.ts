import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreatePhoneDto {
  @IsString()
  @IsOptional()
  brand: string;

  @IsString()
  @IsOptional()
  model: string;

  @IsInt()
  @IsPositive()
  price: number;
}
