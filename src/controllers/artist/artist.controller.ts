import { Controller, Get } from '@nestjs/common';
import { ArtistService } from '../../services/artist/artist.service';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('test')
  async createTestArtist() {
    return this.artistService.createTestSong();
  }
}
