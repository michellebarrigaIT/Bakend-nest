import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from 'src/database/entities/album.entity';
import { AlbumDto } from 'src/dtos/album.dto';
import { toAlbumDto, toAlbumEntity } from 'src/transformers/album.transformer';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(Album)
        private albumRepository: Repository<Album>,
    ) {}

    async findAll(): Promise<AlbumDto[]> {
        const albums = await this.albumRepository.find({ relations: ['artist', 'songs'] });
        return albums.map(toAlbumDto);
    }
    
    async findOne(id: number): Promise<AlbumDto | null> {
        const album = await this.albumRepository.findOne({
            where: { id },
            relations: ['artist', 'songs'],
        });
        return album ? toAlbumDto(album) : null;
    }

    async create(dto: AlbumDto): Promise<AlbumDto | null> {
        const album = this.albumRepository.create(toAlbumEntity(dto));
        const saved = await this.albumRepository.save(album);
        if (!saved) return null;

        const found = await this.albumRepository.findOne({ where: { id: saved.id }, relations: ['album'] });
        return found ? toAlbumDto(found) : null;
    }

    async update(id: number, dto: Partial<AlbumDto>): Promise<AlbumDto | null> {
        const album = await this.albumRepository.findOne({ where: { id } });
        if (!album) {
            return null;
        }
        Object.assign(album, dto);
        const updatedAlbum = await this.albumRepository.save(album);
        return toAlbumDto(updatedAlbum);
    }

    async delete(id: number): Promise<void> {
        await this.albumRepository.delete(id);
    }
}
