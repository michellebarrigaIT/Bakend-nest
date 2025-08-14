import { from } from "form-data";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateSongValidator {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  duration: number;

  @IsInt()
  @IsNotEmpty()
  albumId: number;
}

export class UpdateSongValidator {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    duration?: number;

    @IsOptional()
    @IsInt()
    albumId?: number;
}
