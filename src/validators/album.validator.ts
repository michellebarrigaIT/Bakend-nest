import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateAlbumValidator {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1800)
  releaseDate: Date;

  @IsInt()
  @IsNotEmpty()
  artistId: number;
}

export class UpdateAlbumValidator {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  releaseDate?: Date;

  @IsOptional()
  @IsInt()
  artistId?: number;

  @IsOptional()
  @IsInt({ each: true })
  songs?: number[];
}
