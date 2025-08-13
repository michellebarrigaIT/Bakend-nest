import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from 'src/database/entities/artist.entity';
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
      entities: [Artist],
      synchronize: true,
    }),
    ArtistModule,
  ],
})
export class DatabaseModule {}
