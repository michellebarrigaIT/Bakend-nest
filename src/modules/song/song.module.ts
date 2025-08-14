import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongController } from 'src/controllers/song/song.controller';
import { Song } from 'src/database/entities/song.entity';
import { SongService } from 'src/services/song/song.service';

@Module({
    imports: [TypeOrmModule.forFeature([Song])],
    controllers: [SongController],
    providers: [SongService],
})
export class SongModule {}
