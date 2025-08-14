import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreController } from 'src/controllers/genre/genre.controller';
import { Genre } from 'src/database/entities/genre.entity';
import { GenreService } from 'src/services/genre/genre.service';

@Module({
    imports: [TypeOrmModule.forFeature([Genre])],
    controllers: [GenreController],
    providers: [GenreService],
})
export class GenreModule {}
