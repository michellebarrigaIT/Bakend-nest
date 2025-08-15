import { from } from "form-data";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateSongValidator {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'duration must be a number' })
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
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'duration must be a number' })
    @IsNotEmpty()
    @Min(0)
    duration?: number;

    @IsOptional()
    @IsInt()
    albumId?: number;
}
