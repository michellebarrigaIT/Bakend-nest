import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGenreValidator {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsOptional()
    @IsString()
    description?: string;
}

export class UpdateGenreValidator {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;
}
