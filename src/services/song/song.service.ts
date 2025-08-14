import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from 'src/database/entities/song.entity';
import { SongDto } from 'src/dtos/song.dto';
import { toSongDto, toSongEntity } from 'src/transformers/song.transformer';
import { Repository } from 'typeorm';

@Injectable()
export class SongService {
    constructor(
        @InjectRepository(Song)
        private songRepo: Repository<Song>,
    ) {}

    async findAll(): Promise<SongDto[]> {
        const songs = await this.songRepo.find({ relations: ['album'] });
        return songs.map(toSongDto);
    }

    async findOne(id: number): Promise<SongDto | null> {
        const song = await this.songRepo.findOne({ where: { id }, relations: ['album'] });
        return song ? toSongDto(song) : null;
    }

    async create(songDto: SongDto): Promise<SongDto | null> {
        const song = this.songRepo.create(toSongEntity(songDto));
        const saved = await this.songRepo.save(song);
        if (!saved) return null;

        const found = await this.songRepo.findOne({ where: { id: saved.id }, relations: ['album'] });
        return found ? toSongDto(found) : null;
    }

    async updateAll(id: number, songDto: Partial<SongDto>): Promise<SongDto | null> {
        const exists = await this.findOne(id);
        if (!exists) return null;
        await this.songRepo.update(id, toSongEntity(songDto));
        const updated = await this.songRepo.findOne({ where: { id }, relations: ['album'] });
        return updated ? toSongDto(updated) : null;
    }

    async update(id: number, songDto: Partial<SongDto>): Promise<SongDto | null> {
        return this.updateAll(id, songDto);
    }

    async delete(id: number): Promise<void> {
        await this.songRepo.delete(id);
    }
}
