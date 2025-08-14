import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { ArtistService } from './services/artist/artist.service';
import { ArtistController } from './controllers/artist/artist.controller';
import { ArtistModule } from './modules/artist/artist.module';
import { SongService } from './services/song/song.service';
import { SongController } from './controllers/song/song.controller';
import { SongModule } from './modules/song/song.module';

@Module({
  imports: [DatabaseModule, ArtistModule, SongModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
