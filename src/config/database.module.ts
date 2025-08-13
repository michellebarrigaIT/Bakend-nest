import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from 'src/database/entities/album.entity';
import { Artist } from 'src/database/entities/artist.entity';
import { Genre } from 'src/database/entities/genre.entity';
import { GenreSong } from 'src/database/entities/genre_song.entity';
import { Song } from 'src/database/entities/song.entity';
import { ArtistModule } from 'src/modules/artist/artist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'song-library',
      entities: [
        Artist,
        Song,
        Album,
        Genre,
        GenreSong,
    ],
      synchronize: true,
    }),
    ArtistModule,
  ],
})
export class DatabaseModule {}
