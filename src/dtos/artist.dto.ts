import { from } from "form-data";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateArtistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsInt()
  @Min(1800)
  debut_year: number;
}

export class UpdateArtistDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsInt()
  @Min(1800)
  debut_year?: number;
}
