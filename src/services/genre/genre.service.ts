import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from 'src/database/entities/genre.entity';
import { GenreDto } from 'src/dtos/genre.dto';
import { toGenreDto } from 'src/transformers/genre.transformer';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private albumRepository: Repository<Genre>,
    ) {}

    async findAll(): Promise<GenreDto[]> {
        const genres = await this.albumRepository.find();
        return genres.map(toGenreDto);
    }

    async findOne(id: number): Promise<GenreDto | null> {
        const genre = await this.albumRepository.findOne({
            where: { id },
        });
        return genre ? toGenreDto(genre) : null;
    }

    async create(dto: GenreDto): Promise<GenreDto | null> {
        const genre = this.albumRepository.create(dto);
        const saved = await this.albumRepository.save(genre);
        if (!saved) return null;

        const found = await this.albumRepository.findOne({ where: { id: saved.id } });
        return found ? toGenreDto(found) : null;
    }

    async update(id: number, dto: Partial<GenreDto>): Promise<GenreDto | null> {
        const genre = await this.albumRepository.findOne({ where: { id } });
        if (!genre) {
            return null;
        }
        Object.assign(genre, dto);
        const updatedGenre = await this.albumRepository.save(genre);
        return toGenreDto(updatedGenre);
    }

    async delete(id: number): Promise<void> {
        await this.albumRepository.delete(id);
    }
}
