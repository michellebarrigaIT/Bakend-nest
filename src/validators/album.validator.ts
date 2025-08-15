import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, MaxDate, Min, MinDate } from "class-validator";
import { Type, Transform } from 'class-transformer';
export class CreateAlbumValidator {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDate()
  @Type(() => Date)
  @MinDate(new Date('1800-01-01'))
  @MaxDate(new Date())
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
  @IsDate()
  @Type(() => Date)
  @MinDate(new Date('1800-01-01'))
  @MaxDate(new Date())
  releaseDate: Date;

  @IsOptional()
  @IsInt()
  artistId?: number;

  @IsOptional()
  @IsInt({ each: true })
  songs?: number[];
}
