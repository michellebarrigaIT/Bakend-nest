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
import { AlbumService } from './services/album/album.service';
import { AlbumController } from './controllers/album/album.controller';
import { AlbumModule } from './modules/album/album.module';
import { GenreService } from './services/genre/genre.service';
import { GenreController } from './controllers/genre/genre.controller';
import { GenreModule } from './modules/genre/genre.module';

@Module({
  imports: [DatabaseModule, ArtistModule, SongModule, AlbumModule, GenreModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
