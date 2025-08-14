import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumController } from 'src/controllers/album/album.controller';
import { Album } from 'src/database/entities/album.entity';
import { AlbumService } from 'src/services/album/album.service';

@Module({
    imports: [TypeOrmModule.forFeature([Album])],
    controllers: [AlbumController],
    providers: [AlbumService],
})
export class AlbumModule {}
