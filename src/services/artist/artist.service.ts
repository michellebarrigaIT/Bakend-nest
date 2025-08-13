import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from '../../database/entities/artist.entity';

@Injectable()
export class ArtistService {
    constructor(
        @InjectRepository(Artist)
        private artistRepo: Repository<Artist>,
    ) {}

    async createTestSong() {
        const artist = this.artistRepo.create({
        name: 'Queen',
        country: 'United Kingdom',
        debut_year: 1970,
        });
        return this.artistRepo.save(artist);
    }

    async create(artistData: Partial<Artist>): Promise<Artist> {
        const artist = this.artistRepo.create(artistData);
        return this.artistRepo.save(artist);
    }

    async findAll(): Promise<Artist[]> {
        return this.artistRepo.find({ relations: ['albums'] });
    }

    async findOne(id: number): Promise<Artist | null> {
        return this.artistRepo.findOne({ where: { id }, relations: ['albums'] });
    }

    async updateAll(id: number, artistData: Partial<Artist>): Promise<Artist | null> {
        const exists = await this.findOne(id);
        if (!exists) return null;
        await this.artistRepo.update(id, artistData);
        return this.findOne(id);
    }


    async update(id: number, artistData: Partial<Artist>): Promise<Artist | null> {
        const artist = await this.findOne(id);
        if (!artist) {
            return null;
        }
        await this.artistRepo.update(id, artistData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.artistRepo.delete(id);
    }
}
