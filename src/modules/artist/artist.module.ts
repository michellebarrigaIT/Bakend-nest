import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from '../../database/entities/artist.entity';
import { ArtistService } from '../../services/artist/artist.service';
import { ArtistController } from '../../controllers/artist/artist.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
