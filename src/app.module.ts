import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { ArtistService } from './services/artist/artist.service';
import { ArtistController } from './controllers/artist/artist.controller';
import { ArtistModule } from './modules/artist/artist.module';
import { SongService } from './services/song/song.service';

@Module({
  imports: [DatabaseModule, ArtistModule],
  controllers: [AppController],
  providers: [AppService, SongService],
})
export class AppModule {}
