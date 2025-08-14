import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Album } from 'src/database/entities/album.entity';
import { Artist } from 'src/database/entities/artist.entity';
import { Genre } from 'src/database/entities/genre.entity';
import { GenreSong } from 'src/database/entities/genre_song.entity';
import { Song } from 'src/database/entities/song.entity';
import { ArtistModule } from 'src/modules/artist/artist.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5433', 10),
      username: process.env.POSTGRES_USER || 'postgres',
      password: (process.env.DB_PASSWORD || 'password').trim(),
      database: (process.env.POSTGRES_DB || 'song-library').trim(),
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
