import { Genre } from "src/database/entities/genre.entity";
import { GenreDto } from "src/dtos/genre.dto";

export function toGenreDto(genre: Genre): GenreDto {
    return new GenreDto(
        genre.name,
        genre.description,
        genre.id
    );
}

export function toGenreEntity(dto: Partial<GenreDto>): Partial<Genre> {
    const entity: Partial<Genre> = {};

    if (dto.getName) {
        entity.name = dto.getName();
    }

    if (dto.getDescription) {
        entity.description = dto.getDescription();
    }

    return entity;
}
