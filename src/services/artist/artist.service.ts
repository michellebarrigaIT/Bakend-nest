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
}
